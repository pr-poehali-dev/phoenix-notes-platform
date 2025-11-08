import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [emotionLevel, setEmotionLevel] = useState(65);
  const [phoenixCoins, setPhoenixCoins] = useState(342);
  const [newEntry, setNewEntry] = useState("");

  const psychologists = [
    {
      id: 1,
      name: "Анна Петрова",
      specialty: "Когнитивно-поведенческая терапия",
      experience: "12 лет",
      rating: 4.9,
      verified: true,
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Дмитрий Соколов",
      specialty: "Семейная психология",
      experience: "8 лет",
      rating: 4.8,
      verified: true,
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Елена Волкова",
      specialty: "Работа с тревожностью",
      experience: "15 лет",
      rating: 5.0,
      verified: true,
      avatar: "/placeholder.svg"
    }
  ];

  const emotionEntries = [
    { date: "8 ноября", mood: "Спокойно", level: 70, note: "Хороший день, продуктивная работа" },
    { date: "7 ноября", mood: "Тревожно", level: 45, note: "Беспокойство перед встречей" },
    { date: "6 ноября", mood: "Радостно", level: 85, note: "Завершил важный проект" }
  ];

  const getEmotionColor = (level: number) => {
    if (level >= 70) return "text-phoenix-green";
    if (level >= 40) return "text-phoenix-orange";
    return "text-phoenix-purple";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-phoenix-orange to-phoenix-purple rounded-lg flex items-center justify-center animate-pulse-glow">
              <span className="text-2xl">🔥</span>
            </div>
            <h1 className="text-2xl font-bold">Phoenix Notes</h1>
          </div>
          <div className="flex items-center gap-6">
            <Button variant="ghost" onClick={() => setActiveTab("home")}>
              <Icon name="Home" className="mr-2" size={18} />
              Главная
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab("profile")}>
              <Icon name="User" className="mr-2" size={18} />
              Профиль
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab("diary")}>
              <Icon name="BookOpen" className="mr-2" size={18} />
              Дневник
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab("psychologists")}>
              <Icon name="Users" className="mr-2" size={18} />
              Психологи
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {activeTab === "home" && (
          <div className="space-y-8 animate-fade-in">
            <section className="text-center py-16">
              <div className="inline-block mb-6 animate-pulse-glow">
                <div className="w-32 h-32 bg-gradient-to-br from-phoenix-orange via-phoenix-purple to-phoenix-blue rounded-full flex items-center justify-center text-6xl shadow-2xl">
                  🔥
                </div>
              </div>
              <h2 className="text-5xl font-bold mb-6">Phoenix Notes</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
                Персонализированное цифровое отражение вашего внутреннего состояния. 
                Превращайте хаотичные переживания в понятный маршрут самопознания.
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setActiveTab("profile")}>
                  Начать сейчас
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveTab("psychologists")}>
                  Найти психолога
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Brain" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Эмоциональный аватар</CardTitle>
                  <CardDescription>
                    Живое отображение вашего состояния в реальном времени
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Coins" className="text-secondary" size={24} />
                  </div>
                  <CardTitle>Phoenix монеты</CardTitle>
                  <CardDescription>
                    1 минута в приложении = 1 монета для оплаты консультаций
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Sparkles" className="text-accent" size={24} />
                  </div>
                  <CardTitle>AI-рекомендации</CardTitle>
                  <CardDescription>
                    Персонализированные стратегии на основе анализа паттернов
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Мой профиль</h2>
              <div className="flex items-center gap-2 bg-phoenix-orange/10 px-4 py-2 rounded-lg">
                <Icon name="Coins" className="text-phoenix-orange" size={20} />
                <span className="font-semibold">{phoenixCoins}</span>
                <span className="text-sm text-muted-foreground">Phoenix монет</span>
              </div>
            </div>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-phoenix-orange via-phoenix-purple to-phoenix-blue rounded-full flex items-center justify-center text-5xl animate-pulse-glow shadow-xl">
                      😊
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg">
                      {emotionLevel}
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Эмоциональный аватар Phoenix</CardTitle>
                    <CardDescription className="text-base">
                      Текущее состояние: <span className={`font-semibold ${getEmotionColor(emotionLevel)}`}>
                        {emotionLevel >= 70 ? "Стабильное" : emotionLevel >= 40 ? "Умеренное" : "Требует внимания"}
                      </span>
                    </CardDescription>
                    <Progress value={emotionLevel} className="mt-3 h-2" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-primary">{emotionEntries.length}</div>
                    <div className="text-sm text-muted-foreground mt-1">Записей в дневнике</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-secondary">12</div>
                    <div className="text-sm text-muted-foreground mt-1">Дней в Phoenix</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-accent">5</div>
                    <div className="text-sm text-muted-foreground mt-1">Консультаций</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-accent" size={24} />
                  AI-рекомендации от Phoenix
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <Icon name="Lightbulb" className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Паттерн обнаружен</h4>
                    <p className="text-sm text-muted-foreground">
                      Ваши записи показывают повышенную тревожность по понедельникам. Рекомендуем практику медитации в начале недели.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <Icon name="Heart" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Позитивная динамика</h4>
                    <p className="text-sm text-muted-foreground">
                      За последнюю неделю ваш эмоциональный уровень вырос на 15%. Продолжайте в том же духе!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "diary" && (
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold">Дневник эмоций</h2>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PenLine" size={24} />
                  Новая запись
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="Как вы себя чувствуете сегодня? Опишите свои эмоции..."
                  className="min-h-[120px] mb-4"
                  value={newEntry}
                  onChange={(e) => setNewEntry(e.target.value)}
                />
                <div className="flex gap-2 justify-between items-center">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      😊 Радостно
                    </Button>
                    <Button variant="outline" size="sm">
                      😌 Спокойно
                    </Button>
                    <Button variant="outline" size="sm">
                      😟 Тревожно
                    </Button>
                    <Button variant="outline" size="sm">
                      😢 Грустно
                    </Button>
                  </div>
                  <Button onClick={() => setNewEntry("")}>
                    Сохранить запись
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">История записей</h3>
              {emotionEntries.map((entry, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">{entry.date}</Badge>
                          <Badge className={getEmotionColor(entry.level)}>{entry.mood}</Badge>
                        </div>
                        <p className="text-muted-foreground">{entry.note}</p>
                      </div>
                      <div className="flex flex-col items-center gap-1 min-w-[60px]">
                        <div className={`text-2xl font-bold ${getEmotionColor(entry.level)}`}>
                          {entry.level}
                        </div>
                        <Progress value={entry.level} className="w-full h-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "psychologists" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Верифицированные психологи</h2>
              <Button variant="outline">
                <Icon name="Filter" className="mr-2" size={18} />
                Фильтры
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {psychologists.map((psychologist) => (
                <Card key={psychologist.id} className="hover:shadow-lg transition-all hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={psychologist.avatar} />
                        <AvatarFallback>{psychologist.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{psychologist.name}</CardTitle>
                          {psychologist.verified && (
                            <Icon name="BadgeCheck" className="text-primary" size={18} />
                          )}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Icon name="Star" className="text-phoenix-orange fill-phoenix-orange" size={14} />
                          <span className="text-sm font-semibold">{psychologist.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Специализация</div>
                        <div className="text-sm font-medium">{psychologist.specialty}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Опыт работы</div>
                        <div className="text-sm font-medium">{psychologist.experience}</div>
                      </div>
                      <Button className="w-full mt-4">
                        Записаться на консультацию
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Все психологи верифицированы</h3>
                    <p className="text-sm text-muted-foreground">
                      В Phoenix Notes работают только специалисты с подтверждённым образованием и лицензией
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <footer className="border-t mt-16 py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Phoenix Notes — ваш путь к эмоциональному благополучию</p>
          <p className="text-sm mt-2">Время — это огонь, а монеты Phoenix — его искры</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
