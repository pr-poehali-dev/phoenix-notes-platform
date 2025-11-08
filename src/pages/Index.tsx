import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [betaSubTab, setBetaSubTab] = useState("profile");
  const [emotionLevel, setEmotionLevel] = useState(65);
  const [phoenixCoins, setPhoenixCoins] = useState(342);
  const [newEntry, setNewEntry] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-phoenix-orange to-phoenix-purple rounded-lg flex items-center justify-center animate-pulse-glow">
              <span className="text-xl md:text-2xl">🔥</span>
            </div>
            <h1 className="text-lg md:text-2xl font-bold">Phoenix Notes</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => setActiveTab("home")}>
              <Icon name="Home" className="mr-2" size={18} />
              Главная
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab("beta")}>
              <Icon name="Sparkles" className="mr-2" size={18} />
              Beta версия
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="flex flex-col gap-4 mt-8">
                <Button 
                  variant="ghost" 
                  className="justify-start text-base"
                  onClick={() => { setActiveTab("home"); setMobileMenuOpen(false); }}
                >
                  <Icon name="Home" className="mr-3" size={20} />
                  Главная
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start text-base"
                  onClick={() => { setActiveTab("beta"); setMobileMenuOpen(false); }}
                >
                  <Icon name="Sparkles" className="mr-3" size={20} />
                  Beta версия
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-4 md:py-8">
        {activeTab === "home" && (
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <section className="text-center py-8 md:py-16">
              <div className="inline-block mb-4 md:mb-6 animate-pulse-glow">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-phoenix-orange via-phoenix-purple to-phoenix-blue rounded-full flex items-center justify-center text-5xl md:text-6xl shadow-2xl">
                  🔥
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-4">Phoenix Notes</h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif px-4">
                Персонализированное цифровое отражение вашего внутреннего состояния. 
                Превращайте хаотичные переживания в понятный маршрут самопознания.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8 px-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto" onClick={() => { setActiveTab("beta"); setBetaSubTab("profile"); }}>
                  Начать сейчас
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => { setActiveTab("beta"); setBetaSubTab("psychologists"); }}>
                  Найти психолога
                </Button>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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

        {activeTab === "beta" && (
          <div className="space-y-4 md:space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="text-sm">
                <Icon name="Sparkles" className="mr-1" size={14} />
                Beta версия
              </Badge>
            </div>

            <Tabs value={betaSubTab} onValueChange={setBetaSubTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="profile" className="text-sm md:text-base">
                  <Icon name="User" className="mr-2" size={16} />
                  Профиль
                </TabsTrigger>
                <TabsTrigger value="diary" className="text-sm md:text-base">
                  <Icon name="BookOpen" className="mr-2" size={16} />
                  Дневник
                </TabsTrigger>
                <TabsTrigger value="psychologists" className="text-sm md:text-base">
                  <Icon name="Users" className="mr-2" size={16} />
                  Психологи
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-0">
          <div className="space-y-4 md:space-y-6 animate-fade-in max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <h2 className="text-2xl md:text-3xl font-bold">Мой профиль</h2>
              <div className="flex items-center gap-2 bg-phoenix-orange/10 px-3 md:px-4 py-2 rounded-lg">
                <Icon name="Coins" className="text-phoenix-orange" size={18} />
                <span className="font-semibold text-sm md:text-base">{phoenixCoins}</span>
                <span className="text-xs md:text-sm text-muted-foreground">Phoenix монет</span>
              </div>
            </div>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-phoenix-orange via-phoenix-purple to-phoenix-blue rounded-full flex items-center justify-center text-4xl md:text-5xl animate-pulse-glow shadow-xl">
                      😊
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-accent text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-xs md:text-sm font-bold shadow-lg">
                      {emotionLevel}
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <CardTitle className="text-xl md:text-2xl mb-2">Эмоциональный аватар Phoenix</CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      Текущее состояние: <span className={`font-semibold ${getEmotionColor(emotionLevel)}`}>
                        {emotionLevel >= 70 ? "Стабильное" : emotionLevel >= 40 ? "Умеренное" : "Требует внимания"}
                      </span>
                    </CardDescription>
                    <Progress value={emotionLevel} className="mt-3 h-2" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 md:pt-6">
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  <div className="text-center p-2 md:p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{emotionEntries.length}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">Записей</div>
                  </div>
                  <div className="text-center p-2 md:p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl md:text-3xl font-bold text-secondary">12</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">Дней</div>
                  </div>
                  <div className="text-center p-2 md:p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl md:text-3xl font-bold text-accent">5</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">Консультаций</div>
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
              </TabsContent>

              <TabsContent value="diary" className="mt-0">
          <div className="space-y-4 md:space-y-6 animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">Дневник эмоций</h2>

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
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs md:text-sm">
                      😊 Радостно
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs md:text-sm">
                      😌 Спокойно
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs md:text-sm">
                      😟 Тревожно
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs md:text-sm">
                      😢 Грустно
                    </Button>
                  </div>
                  <Button onClick={() => setNewEntry("")} className="w-full sm:w-auto sm:ml-auto">
                    Сохранить запись
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">История записей</h3>
              {emotionEntries.map((entry, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-4 md:pt-6">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                      <div className="flex-1 w-full">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{entry.date}</Badge>
                          <Badge className={`${getEmotionColor(entry.level)} text-xs`}>{entry.mood}</Badge>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground">{entry.note}</p>
                      </div>
                      <div className="flex sm:flex-col items-center gap-2 sm:gap-1 min-w-[60px] w-full sm:w-auto">
                        <div className={`text-xl md:text-2xl font-bold ${getEmotionColor(entry.level)}`}>
                          {entry.level}
                        </div>
                        <Progress value={entry.level} className="flex-1 sm:w-full h-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
              </TabsContent>

              <TabsContent value="psychologists" className="mt-0">
          <div className="space-y-4 md:space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <h2 className="text-2xl md:text-3xl font-bold">Верифицированные психологи</h2>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Icon name="Filter" className="mr-2" size={18} />
                Фильтры
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {psychologists.map((psychologist) => (
                <Card key={psychologist.id} className="hover:shadow-lg transition-all hover:scale-[1.01] md:hover:scale-[1.02]">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3 md:gap-4">
                      <Avatar className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                        <AvatarImage src={psychologist.avatar} />
                        <AvatarFallback>{psychologist.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-base md:text-lg truncate">{psychologist.name}</CardTitle>
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
                  <CardContent className="pt-3">
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs md:text-sm text-muted-foreground mb-1">Специализация</div>
                        <div className="text-sm font-medium">{psychologist.specialty}</div>
                      </div>
                      <div>
                        <div className="text-xs md:text-sm text-muted-foreground mb-1">Опыт работы</div>
                        <div className="text-sm font-medium">{psychologist.experience}</div>
                      </div>
                      <Button className="w-full mt-3 md:mt-4 text-sm" size="sm">
                        Записаться
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
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>

      <footer className="border-t mt-8 md:mt-16 py-6 md:py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm md:text-base">Phoenix Notes — ваш путь к эмоциональному благополучию</p>
          <p className="text-xs md:text-sm mt-2">Время — это огонь, а монеты Phoenix — его искры</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;