
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Bell, Eye, Moon, Sun } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/contexts/ThemeContext';
import ExceptionApps from '@/components/ExceptionApps';

const Settings = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [settings, setSettings] = useState({
    walkingDetection: true,
    lyingDetection: true,
    walkingSensitivity: [70],
    lyingSensitivity: [60],
    bedtimeStart: 22,
    bedtimeEnd: 7,
    vibrationAlert: true,
    soundAlert: false,
    popupAlert: true,
    exerciseMode: false,
  });

  const { toast } = useToast();

  const handleToggle = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handleSliderChange = (key: string, value: number[]) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSettings = () => {
    toast({
      title: "설정이 저장되었어요! ✨",
      description: "변경된 설정이 바로 적용됩니다. 함께 건강한 습관을 만들어가요!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-4">
            <div></div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="dark:border-gray-600"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">설정</h1>
          <p className="text-gray-600 dark:text-gray-400">나만의 DeepFocus를 만들어보세요! 🎯</p>
        </div>

        {/* Detection Settings */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <Eye className="h-5 w-5 text-blue-500" />
              스마트 감지 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium text-gray-800 dark:text-gray-200">보행 중 감지</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">걸을 때 안전을 위해 알려드려요 🚶‍♀️</p>
              </div>
              <Switch
                checked={settings.walkingDetection}
                onCheckedChange={() => handleToggle('walkingDetection')}
              />
            </div>

            {settings.walkingDetection && (
              <div className="ml-4 space-y-2">
                <Label className="text-sm text-gray-600 dark:text-gray-400">감지 민감도: {settings.walkingSensitivity[0]}%</Label>
                <Slider
                  value={settings.walkingSensitivity}
                  onValueChange={(value) => handleSliderChange('walkingSensitivity', value)}
                  max={100}
                  min={10}
                  step={10}
                  className="w-full"
                />
              </div>
            )}

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium text-gray-800 dark:text-gray-200">침대에서 감지</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">좋은 수면을 위해 도와드려요 😴</p>
              </div>
              <Switch
                checked={settings.lyingDetection}
                onCheckedChange={() => handleToggle('lyingDetection')}
              />
            </div>

            {settings.lyingDetection && (
              <div className="ml-4 space-y-2">
                <Label className="text-sm text-gray-600 dark:text-gray-400">감지 민감도: {settings.lyingSensitivity[0]}%</Label>
                <Slider
                  value={settings.lyingSensitivity}
                  onValueChange={(value) => handleSliderChange('lyingSensitivity', value)}
                  max={100}
                  min={10}
                  step={10}
                  className="w-full"
                />
              </div>
            )}

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium text-gray-800 dark:text-gray-200">운동 모드</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">운동할 때는 알림을 받지 않아요 🏃‍♂️</p>
              </div>
              <Switch
                checked={settings.exerciseMode}
                onCheckedChange={() => handleToggle('exerciseMode')}
              />
            </div>
          </CardContent>
        </Card>

        {/* Exception Apps */}
        <ExceptionApps />

        {/* Time Settings */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <Clock className="h-5 w-5 text-purple-500" />
              수면 친화 시간
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-base font-medium mb-2 block text-gray-800 dark:text-gray-200">편안한 수면 시간대</Label>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="px-3 py-1 dark:border-gray-600">
                  {settings.bedtimeStart}:00 ~ {settings.bedtimeEnd}:00
                </Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                이 시간엔 더 따뜻하게 알려드려요 🌙
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Alert Settings */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <Bell className="h-5 w-5 text-red-500" />
              친근한 알림 방식
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium text-gray-800 dark:text-gray-200">부드러운 진동</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">살짝 진동으로 알려드려요</p>
              </div>
              <Switch
                checked={settings.vibrationAlert}
                onCheckedChange={() => handleToggle('vibrationAlert')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium text-gray-800 dark:text-gray-200">따뜻한 소리</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">편안한 소리로 알려드려요</p>
              </div>
              <Switch
                checked={settings.soundAlert}
                onCheckedChange={() => handleToggle('soundAlert')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium text-gray-800 dark:text-gray-200">응원 메시지</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">화면에 격려 메시지를 보여드려요</p>
              </div>
              <Switch
                checked={settings.popupAlert}
                onCheckedChange={() => handleToggle('popupAlert')}
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="text-center">
          <Button onClick={saveSettings} className="px-8 py-2 bg-blue-600 hover:bg-blue-700">
            설정 저장하기 💾
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
