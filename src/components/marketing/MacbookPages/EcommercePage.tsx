// EcommercePage.tsx
'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Calendar, ChevronDown, ShoppingBag, DollarSign, Box, AlertCircle, Package, Star, ShoppingCart, Clock, TrendingUp, Mail, Bell } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import NotificationCarousel from '../NotificationCarousel';
import OrdersSection from '../OrderSection';
import AutomationSection from '../AutomationMetric';

const EcommercePage = () => {
  const [timeRange, setTimeRange] = useState('7 derniers jours');
  const [notifications, setNotifications] = useState([
    { type: 'sale', message: 'Nouvelle commande de Jean D. - 156.99€', time: '2 min' },
    { type: 'alert', message: 'Stock faible : "T-Shirt Premium" (5 restants)', time: '15 min' },
    { type: 'review', message: 'Nouvel avis 5★ de Marie L.', time: '1h' }
  ]);

  const metrics = [
    { 
      label: 'Ventes du jour', 
      value: '1,234€', 
      trend: '+18%',
      icon: DollarSign,
      color: 'bg-green-100 text-green-600'
    },
    { 
      label: 'Commandes', 
      value: '28', 
      trend: '+12%',
      icon: ShoppingBag,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      label: 'Produits', 
      value: '156', 
      trend: '3 faibles',
      icon: Box,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const topProducts = [
    { name: 'T-Shirt Premium', sales: 45, stock: 12, revenue: '1,125€', trend: '+12%' },
    { name: 'Jeans Slim', sales: 38, stock: 8, revenue: '1,900€', trend: '+8%' },
    { name: 'Sneakers Pro', sales: 32, stock: 15, revenue: '2,880€', trend: '+15%' },
  ];

  return (
    <div className="max-h-screen min-h-[90vh] h-full p-4">
      <div className="grid grid-cols-1  lg:grid-cols-5 gap-4">
        {/* Colonne gauche */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg flex items-center leading-5 gap-2 font-bold">
              <Image src="/images/basket.png" className='p-1.5 bg-white rounded-md' alt="" width="26" height="26"/>
              Dashboard
            </h2>
            <button className="flex font-[600] items-center gap-2 px-3 py-1.5 bg-white rounded-lg text-xs">
              <Calendar className="w-3 h-3" />
              {timeRange}
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          
          <NotificationCarousel/>
          <AutomationSection/>
        </div>

        {/* Colonne droite */}
        <div className="lg:col-span-3 space-y-4 max-md:flex max-md:gap-4 max-md:space-y-0">
          {/* En-tête */}
          <div className='w-full p-4 py-3 bg-white max-md:hidden rounded-lg'>
            <div className='flex justify-between w-full items-center'>
              <span className='text-xl font-[700]'>Performance du jour</span>
              <span className='p-2 px-3 bg-green-500 text-white font-[600] text-xs uppercase'>En croissance</span>
            </div>
          </div>

          {/* Métriques */}
          <div className='flex flex-col lg:grid sm:flex sm:flex-col lg:grid-cols-3 gap-4'>
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-white p-4 max-md:h-max rounded-lg"
                style={{ 
                  animation: `slideIn 0.5s ease-out forwards ${index * 0.2}s`,
                  opacity: 0
                }}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${metric.color}`}>
                    <metric.icon className="w-6 h-6 lg:w-12 lg:h-12" />
                  </div>
                  <div className="animate-fade-in min-w-0 flex-1">
                    <div className="relative overflow-hidden  max-w-full">
                      <div className="text-sm max-md:text-xs font-[600] text-gray-600 truncate">
                        {metric.label}
                      </div>
                    </div>
                    <div className="text-base lg:text-xl font-bold">{metric.value}</div>
                    <div className="text-green-500 font-[700] max-md:hidden text-sm">{metric.trend}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Widgets WooCommerce */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Commandes récentes */}
            <div className="bg-white p-4 rounded-lg">
              <OrdersSection />
            </div>

            {/* Top Produits amélioré */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <h3 className="text-base font-[600] flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Top Produits
                </h3>
                <div className="flex items-center gap-2">
                  <select className="text-xs border-2 border-gray/20 rounded-lg px-2 py-1">
                    <option>Cette semaine</option>
                    <option>Ce mois</option>
                    <option>Cette année</option>
                  </select>
                  <span className="text-xs  text-white px-2 py-1 bg-blue-600 rounded-full font-semibold cursor-pointer whitespace-nowrap">
                    Voir tout
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                {topProducts.map((product, index) => (
                  <div key={index} className="p-3 hover:bg-gray-50 rounded-lg border-2 border-gray/20">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                          <Package className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <span className="font-semibold text-sm block">{product.name}</span>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full whitespace-nowrap">
                              {product.sales} ventes
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${
                              product.stock < 10 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                              Stock: {product.stock}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-green-600 font-bold text-sm block">{product.revenue}</span>
                        <span className="text-xs text-gray-500">{product.trend} vs hier</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full" 
                        style={{ width: `${(product.sales / 45) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphique des ventes */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-[600] flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Ventes horaires
                </h3>
                <span className="text-xs text-blue-600 font-semibold cursor-pointer">Voir plus</span>
              </div>
              <div className="h-[120px] w-full">
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={Array.from({ length: 12 }, (_, i) => ({
                    heure: `${i * 2}h`,
                    ventes: Math.floor(Math.random() * 800) + 200
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="heure" />
                    <Tooltip />
                    <Bar dataKey="ventes" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Paniers abandonnés */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-[600] flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Paniers abandonnés
                </h3>
                <span className="text-xs text-blue-600  font-semibold cursor-pointer">Voir tout</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">12 paniers</p>
                      <p className="text-xs text-gray-600">Dans la dernière heure</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-orange-600">789€</span>
                </div>
                <button className="w-full py-2 text-sm text-blue-600 font-semibold hover:bg-blue-50 rounded-lg">
                  Lancer une campagne de récupération
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default EcommercePage;