import React, { useState, useEffect } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  status: 'En cours' | 'Expédié' | 'Terminé' | 'En attente';
  amount: string;
  time: string;
  isNew?: boolean;
}

const recentOrders: Order[] = [
  { id: '#2849', customer: 'Sophie M.', status: 'En cours', amount: '89.99€', time: '5 min' },
  { id: '#2848', customer: 'Pierre L.', status: 'Expédié', amount: '156.50€', time: '1h' },
  { id: '#2847', customer: 'Marie C.', status: 'Terminé', amount: '234.99€', time: '2h' },
  { id: '#2846', customer: 'Lucas R.', status: 'En attente', amount: '67.00€', time: '3h' },
];

const generateCustomerName = (): string => {
  const firstNames = ['Jean', 'Marie', 'Pierre', 'Sophie', 'Lucas', 'Emma', 'Thomas', 'Julie'];
  const lastInitials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastInitials[Math.floor(Math.random() * lastInitials.length)]}.`;
};

const OrdersSection: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(recentOrders);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [newOrder, setNewOrder] = useState<Order | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const mockNewOrder: Order = {
        id: `#${Math.floor(Math.random() * 9000) + 1000}`,
        customer: generateCustomerName(),
        status: 'En cours',
        amount: `${Math.floor(Math.random() * 200) + 50}.99€`,
        time: 'à l\'instant',
        isNew: true
      };

      setIsAnimating(true);
      setNewOrder(mockNewOrder);
      setOrders(prev => [mockNewOrder, ...prev.slice(0, 3)]);

      setTimeout(() => {
        setIsAnimating(false);
        setNewOrder(null);
      }, 2000);

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h3 className="text-sm sm:text-base font-[600] flex items-center gap-2">
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          Commandes
        </h3>
        <span className="text-xs text-white max-md:hidden px-2 py-1 bg-blue-600 rounded-full font-semibold cursor-pointer whitespace-nowrap hover:bg-blue-700 transition-colors">
          Voir tout
        </span>
      </div>

      <div className="space-y-2 sm:space-y-3 relative">
        <div className="space-y-2 sm:space-y-3">
          {orders.map((order, index) => (
            <div 
              key={order.id}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 rounded-lg bg-white border-2 border-gray/20 
                ${index === 0 && isAnimating ? 'animate-new-order' : ''}
                hover:bg-gray-50 transition-colors`}
            >
              <div className="flex justify-between sm:block mb-2 sm:mb-0">
                <span className="font-semibold text-xs sm:text-sm">{order.id}</span>
                <p className="text-xs text-gray-600 sm:mt-0.5">{order.customer}</p>
              </div>
              <div className="flex items-center justify-between sm:text-right gap-2">
                <span className={`text-[10px] sm:text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                  order.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'Expédié' ? 'bg-blue-100 text-blue-800' :
                  order.status === 'Terminé' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status}
                </span>
                <p className="text-xs sm:text-sm font-semibold">{order.amount}</p>
              </div>
              {index === 0 && isAnimating && (
                <div className="absolute -right-2 -top-2 animate-success-badge">
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes newOrder {
          0% {
            border-color: rgb(34 197 94);
            background-color: rgb(240 253 244);
            transform: translateY(-20px);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            border-color: rgb(34 197 94);
            background-color: rgb(240 253 244);
          }
          100% {
            border-color: rgb(229 231 235);
            background-color: white;
          }
        }

        @keyframes successBadge {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-new-order {
          animation: newOrder 2s ease forwards;
        }

        .animate-success-badge {
          animation: successBadge 0.5s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default OrdersSection;