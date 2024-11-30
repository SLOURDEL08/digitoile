import React, { useState, useEffect } from 'react';

type NotificationType = 'sale' | 'alert' | 'review' | 'recoverycart';

interface Notification {
  type: NotificationType;
  message: string;
  amount?: string;
  detail?: string;
  rating?: string;
  author?: string;
  time: string;
}

interface NotificationStyle {
  icon: string;
  bgColor: string;
  textColor: string;
  iconBg: string;
}

const NotificationCarousel: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { type: 'sale', message: 'Nouvelle commande', amount: '156.99€', time: '2 min' },
    { type: 'alert', message: 'Stock faible', detail: '5 restants', time: '15 min' },
    { type: 'review', message: 'Avis clients', rating: '5★', author: 'Marie L.', time: '1h' },
    { type: 'sale', message: 'Nouvelle commande', amount: '89.99€', time: '5 min' },
    { type: 'alert', message: 'Stock : "Jean Slim"', detail: '3 restants', time: '30 min' },
    { type: 'recoverycart', message: 'Panier abandonné', rating: '4★', author: 'Sophie R.', time: '2h' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => {
        const rotatedNotifications = [...prev];
        const firstNotif = rotatedNotifications.shift();
        if (firstNotif) {
          rotatedNotifications.push(firstNotif);
        }
        return rotatedNotifications;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getNotificationStyle = (type: NotificationType): NotificationStyle => {
    switch(type) {
      case 'sale':
        return {
          icon: '💰',
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          iconBg: 'bg-green-200'
        };
      case 'alert':
        return {
          icon: '⚠️',
          bgColor: 'bg-orange-100',
          textColor: 'text-orange-800',
          iconBg: 'bg-orange-200'
        };
      case 'review':
        return {
          icon: '⭐',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-800',
          iconBg: 'bg-blue-200'
        };
      case 'recoverycart':
        return {
          icon: '❌',
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          iconBg: 'bg-red-200'
        };
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 w-full">
      <h3 className="text-sm font-semibold mb-3">Notifications en temps réel</h3>
      <div className="grid grid-cols-2 gap-4">
        {notifications.slice(0, 2).map((notif, index) => {
          const style = getNotificationStyle(notif.type);
          return (
            <div
              key={index}
              className={`p-3 rounded-lg ${style.bgColor} transform transition-all duration-500 hover:shadow-md`}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-secondary/5 items-center flex justify-center rounded-full">
                  <span className="text-xl sm:text-2xl">{style.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="relative overflow-hidden">
                    <p 
                      className={`font-[600] ${style.textColor} leading-4 text-xs sm:text-sm whitespace-nowrap pr-4`}
                      style={{
                        maskImage: 'linear-gradient(to right, black 80%, transparent 98%)',
                        WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 98%)'
                      }}
                    >
                      {notif.message}
                    </p>
                  </div>
                  {notif.amount && (
                    <p className="text-xs font-semibold mt-1">{notif.amount}</p>
                  )}
                  {notif.rating && (
                    <p className="text-xs font-semibold mt-1">{notif.rating} - {notif.author}</p>
                  )}
                  {notif.detail && (
                    <p className="text-xs font-semibold mt-1">{notif.detail}</p>
                  )}
                  <p className="text-[10px] font-semibold text-secondary mt-0.5">Il y a {notif.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .text-secondary {
          color: rgba(0, 0, 0, 0.6);
        }
        .bg-secondary\/5 {
          background-color: rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
};

export default NotificationCarousel;