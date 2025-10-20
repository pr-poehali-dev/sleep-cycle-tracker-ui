import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [alarmEnabled, setAlarmEnabled] = useState(false);
  const [selectedTime, setSelectedTime] = useState('07:00');
  const [activeTab, setActiveTab] = useState('home');

  const sleepData = [
    { day: 'Пн', hours: 7.5, quality: 85 },
    { day: 'Вт', hours: 8, quality: 90 },
    { day: 'Ср', hours: 6.5, quality: 70 },
    { day: 'Чт', hours: 7, quality: 80 },
    { day: 'Пт', hours: 8.5, quality: 95 },
    { day: 'Сб', hours: 9, quality: 98 },
    { day: 'Вс', hours: 8, quality: 92 },
  ];

  const sleepCycles = [
    { phase: 'Глубокий сон', duration: 90, color: 'bg-primary' },
    { phase: 'REM', duration: 60, color: 'bg-secondary' },
    { phase: 'Лёгкий сон', duration: 120, color: 'bg-accent' },
    { phase: 'Бодрствование', duration: 10, color: 'bg-muted' },
  ];

  const tips = [
    { icon: 'Moon', text: 'Ложитесь спать в одно и то же время', color: 'text-primary' },
    { icon: 'Sun', text: 'Избегайте экранов за час до сна', color: 'text-accent' },
    { icon: 'Coffee', text: 'Не пейте кофеин после 16:00', color: 'text-secondary' },
    { icon: 'Wind', text: 'Проветривайте комнату перед сном', color: 'text-primary' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sleep Tracker
          </h1>
          <p className="text-muted-foreground">Умный трекинг сна для идеального пробуждения</p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="home" className="data-[state=active]:bg-primary/20">
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="tracking" className="data-[state=active]:bg-primary/20">
              <Icon name="Activity" size={18} className="mr-2" />
              Трекинг
            </TabsTrigger>
            <TabsTrigger value="stats" className="data-[state=active]:bg-primary/20">
              <Icon name="BarChart3" size={18} className="mr-2" />
              Статистика
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-primary/20">
              <Icon name="Settings" size={18} className="mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6 animate-fade-in">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Умный будильник</h2>
                    <p className="text-muted-foreground">Оптимальное время пробуждения: {selectedTime}</p>
                  </div>
                  <div className="animate-pulse-glow">
                    <Icon name="AlarmClock" size={64} className="text-primary" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <Label htmlFor="alarm-toggle" className="text-lg">Включить будильник</Label>
                    <Switch
                      id="alarm-toggle"
                      checked={alarmEnabled}
                      onCheckedChange={setAlarmEnabled}
                      className="data-[state=checked]:bg-primary"
                    />
                  </div>

                  {alarmEnabled && (
                    <div className="animate-fade-in space-y-4">
                      <div className="text-center">
                        <input
                          type="time"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="text-5xl font-bold bg-transparent border-none text-primary focus:outline-none text-center w-full"
                        />
                      </div>

                      <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                        <div className="flex items-start gap-3">
                          <Icon name="Lightbulb" size={20} className="text-primary mt-1" />
                          <div>
                            <h3 className="font-semibold mb-1">Рекомендация</h3>
                            <p className="text-sm text-muted-foreground">
                              Для качественного пробуждения рекомендуется проснуться в {selectedTime} (фаза быстрого сна)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Moon" size={24} className="text-primary" />
                    <h3 className="text-xl font-semibold">Последний сон</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Продолжительность</span>
                      <span className="text-2xl font-bold text-primary">8ч 15м</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Качество</span>
                      <span className="text-2xl font-bold text-accent">92%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="TrendingUp" size={24} className="text-secondary" />
                    <h3 className="text-xl font-semibold">Средние за неделю</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Сон в сутки</span>
                      <span className="text-2xl font-bold text-secondary">7ч 47м</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Эффективность</span>
                      <span className="text-2xl font-bold text-accent">87%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Icon name="Activity" size={28} className="text-primary" />
                  Циклы сна
                </h2>
                <div className="space-y-4">
                  {sleepCycles.map((cycle, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{cycle.phase}</span>
                        <span className="text-sm text-muted-foreground">{cycle.duration} мин</span>
                      </div>
                      <div className="h-8 bg-muted/30 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${cycle.color} transition-all duration-1000 ease-out rounded-full flex items-center justify-end pr-4`}
                          style={{ width: `${(cycle.duration / 280) * 100}%` }}
                        >
                          <span className="text-xs font-semibold text-primary-foreground">
                            {cycle.duration}м
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-background rounded-full">
                      <Icon name="Brain" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Анализ циклов</h3>
                      <p className="text-sm text-muted-foreground">
                        Вы провели 90 минут в глубоком сне и 60 минут в фазе REM. Отличные показатели!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Icon name="BarChart3" size={28} className="text-primary" />
                  Статистика за неделю
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Продолжительность сна</h3>
                    <div className="flex items-end justify-between gap-2 h-48">
                      {sleepData.map((day, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full bg-muted/30 rounded-t-lg relative overflow-hidden group">
                            <div
                              className="bg-gradient-to-t from-primary to-secondary transition-all duration-500 ease-out hover:opacity-90"
                              style={{ height: `${(day.hours / 10) * 192}px` }}
                            >
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-bold text-primary-foreground">
                                  {day.hours}ч
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{day.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Качество сна</h3>
                    <div className="space-y-3">
                      {sleepData.map((day, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{day.day}</span>
                            <span className="text-muted-foreground">{day.quality}%</span>
                          </div>
                          <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-500 ease-out rounded-full"
                              style={{ width: `${day.quality}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Icon name="Sparkles" size={28} className="text-primary" />
                  Советы по сну
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tips.map((tip, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:scale-105"
                    >
                      <div className="flex items-start gap-3">
                        <Icon name={tip.icon} size={24} className={tip.color} />
                        <p className="text-sm leading-relaxed">{tip.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold">Условия пробуждения</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Sun" size={20} className="text-accent" />
                        <Label>Постепенное освещение</Label>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Volume2" size={20} className="text-secondary" />
                        <Label>Мягкие звуки природы</Label>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Vibrate" size={20} className="text-primary" />
                        <Label>Вибрация</Label>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
