'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Calendar, ChevronDown, Users, TrendingUp, DollarSign, ShoppingCart } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Metric {
  label: string;
  value: string;
  trend: string;
  icon: LucideIcon;
  color: string;
}

interface MarketingMetric {
  value: string;
  trend: string;
  color: string;
  label?: string;
  source?: string;
}

interface MarketingNotification {
  title: string;
  metrics: MarketingMetric[];
  icon: LucideIcon;
}

const AnalyticsPage = () => {
  const [timeRange] = useState('7 derniers jours');
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const metrics: Metric[] = [
    { 
      label: 'Visites Totales', 
      value: '15,234', 
      trend: '+12%',
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      label: 'Taux de Conversion', 
      value: '3.2%', 
      trend: '+0.8%',
      icon: TrendingUp,
      color: 'bg-green-100 text-green-600'
    },
    { 
      label: 'Chiffre d\'affaires', 
      value: '12,543€', 
      trend: '+23%',
      icon: DollarSign,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const marketingNotifications: MarketingNotification[] = [
    {
      title: 'Sources des Achats',
      metrics: [
        { source: 'Google Ads', value: '45%', trend: '+5.2%', color: 'blue' },
        { source: 'Facebook', value: '32%', trend: '+3.8%', color: 'indigo' },
        { source: 'Publicités', value: '15%', trend: '+2.1%', color: 'purple' },
        { source: 'Direct', value: '8%', trend: '-0.5%', color: 'gray' }
      ],
      icon: ShoppingCart
    },
    {
      title: 'Engagement Publicitaire',
      metrics: [
        { label: 'CTR', value: '3.2%', trend: '+0.8%', color: 'green' },
        { label: 'CPC', value: '0.45€', trend: '-0.12€', color: 'emerald' }
      ],
      icon: TrendingUp
    },
    {
      title: 'Concours Instagram',
      metrics: [
        { label: 'Participants', value: '1,234', trend: '+234', color: 'pink' },
        { label: 'Partages', value: '456', trend: '+89', color: 'rose' }
      ],
      icon: Users
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotificationIndex((prev) => (prev + 1) % marketingNotifications.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [marketingNotifications.length]);

  return (
    <div className="max-h-full min-h-[90vh] p-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Colonne gauche */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h2 className="text-base sm:text-lg flex items-center gap-2 font-bold">
              <Image src="/images/analytics.png" className='p-1.5 bg-white rounded-md' alt="" width="26" height="26"/>
              Google Analytics 4
            </h2>
            <button className="flex font-[600] items-center gap-2 px-3 py-1.5 bg-white rounded-lg text-xs">
              <Calendar className="w-3 h-3" />
              {timeRange}
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
    {/* Sources de trafic */}
          <div className="p-3 sm:p-4 bg-white rounded-lg h-auto sm:h-44 pb-6 sm:pb-8">
            <h3 className="text-xs sm:text-sm font-semibold mb-1">Sources de Trafic</h3>
            <div className="h-32 sm:h-full">
              <ResponsiveContainer width="100%" height="100%" className="text-[10px]">
                <BarChart layout="vertical" data={[
                  { source: 'Recherche', visits: 6234 },
                  { source: 'Direct', visits: 4234 },
                  { source: 'Social', visits: 2543 },
                  { source: 'Email', visits: 1832 },
                  { source: 'Autres', visits: 432 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="source" type="category" width={80} hide={true} />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 shadow-lg rounded-lg border text-xs">
                            <p className="font-semibold">{payload[0].payload.source}</p>
                            <p>Visites: {payload[0].value}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="visits" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Widget notifications marketing */}
          <div className="p-3 sm:p-4 bg-white rounded-lg relative">
            <div className="relative h-[180px] overflow-hidden bg-gray-50 rounded-lg">
              {marketingNotifications.map((notification, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                    index === currentNotificationIndex 
                      ? 'translate-x-0 opacity-100' 
                      : index < currentNotificationIndex
                        ? '-translate-x-full opacity-0'
                        : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className="h-full p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-${notification.metrics[0].color}-100`}>
                        <notification.icon className={`w-6 h-6 text-${notification.metrics[0].color}-600`} />
                      </div>
                      <h4 className="text-base font-bold">{notification.title}</h4>
                    </div>

                    <div className="flex w-max gap-4">
                      {notification.metrics.map((metric, idx) => (
                        <div 
                          key={idx} 
                          className="flex gap-2 items-center justify-between p-2 border border-gray/40 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-600">
                              {metric.source || metric.label}
                            </span>
                            <span className="text-sm font-bold">
                              {metric.value}
                            </span>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            metric.trend.startsWith('+') 
                              ? 'bg-green-50 text-green-600' 
                              : 'bg-red-50 text-red-600'
                          }`}>
                            {metric.trend}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicateurs de progression */}
            <div className="flex justify-center gap-1 mt-4">
              {marketingNotifications.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentNotificationIndex 
                      ? 'w-8 bg-blue-600' 
                      : 'w-2 bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="lg:col-span-3 space-y-4">
          <div className='w-full p-3 sm:p-4 bg-white rounded-lg'>
            <div className='flex justify-between w-full items-center flex-wrap gap-2'>
              <span className='text-lg sm:text-xl font-[700]'>E-commerce | Campagne publicitaire</span>
              <span className='p-2 px-3 bg-blue-400 text-white font-[600] text-xs uppercase hover:bg-blue-500 transition-colors cursor-pointer'>
                Changer de campagne
              </span>
            </div>
          </div>

          {/* Métriques animées */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-white p-3 sm:p-4 rounded-lg"
                style={{ 
                  animation: `slideIn 0.5s ease-out forwards ${index * 0.2}s`,
                  opacity: 0
                }}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${metric.color}`}>
                    <metric.icon className="w-8 h-8 sm:w-12 sm:h-12" />
                  </div>
                  <div className="animate-fade-in -space-y-1">
                    <div className="text-xs sm:text-sm font-[600] text-gray-600">{metric.label}</div>
                    <div className="text-lg sm:text-2xl font-bold">{metric.value}</div>
                    <div className="text-green-500 font-[700] text-xs sm:text-sm">{metric.trend}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Graphiques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-3 sm:p-4 rounded-lg">
              <h3 className="text-sm sm:text-base font-[600] mb-3">Visites</h3>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%" className="-ml-2">
                  <LineChart data={Array.from({ length: 7 }, (_, i) => ({
                    date: `${i + 1}/11`,
                    visits: Math.floor(Math.random() * 1000) + 500
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visits" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg">
              <h3 className="text-sm sm:text-base font-[600] mb-3">Appareils</h3>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Mobile', value: 55 },
                        { name: 'Desktop', value: 35 },
                        { name: 'Tablet', value: 10 }
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                      label={({name, value}) => `${name}: ${value}%`}
                    >
                      {[...Array(3)].map((_, index) => (
                        <Cell key={index} fill={['#0088FE', '#00C49F', '#FFBB28'][index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
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

export default AnalyticsPage;