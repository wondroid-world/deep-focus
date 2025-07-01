
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Bell, Smartphone, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
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
      title: "설정이 저장되었습니다",
      description: "변경된 설정이 적용됩니다.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">설정</h1>
          <p className="text-gray-600">앱 동작을 원하는 대로 조정하세요</p>
        </div>

        {/* Detection Settings */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-500" />
              감지 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium">보행 중 감지</Label>
                <p className="text-sm text-gray-500">걷는 동안 스마트폰 사용을 감지합니다</p>
              </div>
              <Switch
                checked={settings.walkingDetection}
                onCheckedChange={() => handleToggle('walkingDetection')}
              />
            </div>

            {settings.walkingDetection && (
              <div className="ml-4 space-y-2">
                <Label className="text-sm">감지 민감도: {settings.walkingSensitivity[0]}%</Label>
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
                <Label className="text-base font-medium">침대에서 감지</Label>
                <p className="text-sm text-gray-500">누운 자세에서 스마트폰 사용을 감지합니다</p>
              </div>
              <Switch
                checked={settings.lyingDetection}
                onCheckedChange={() => handleToggle('lyingDetection')}
              />
            </div>

            {settings.lyingDetection && (
              <div className="ml-4 space-y-2">
                <Label className="text-sm">감지 민감도: {settings.lyingSensitivity[0]}%</Label>
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
          </CardContent>
        </Card>

        {/* Time Settings */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-500" />
              시간 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-base font-medium mb-2 block">수면 시간대</Label>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="px-3 py-1">
                  {settings.bedtimeStart}:00 ~ {settings.bedtimeEnd}:00
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                이 시간대에는 침대 감지가 더 민감하게 작동합니다
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Alert Settings */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-red-500" />
              알림 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium">진동 알림</Label>
                <p className="text-sm text-gray-500">경고 시 진동으로 알림</p>
              </div>
              <Switch
                checked={settings.vibrationAlert}
                onCheckedChange={() => handleToggle('vibrationAlert')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium">소리 알림</Label>
                <p className="text-sm text-gray-500">경고 시 소리로 알림</p>
              </div>
              <Switch
                checked={settings.soundAlert}
                onCheckedChange={() => handleToggle('soundAlert')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium">팝업 알림</Label>
                <p className="text-sm text-gray-500">경고 시 화면에 메시지 표시</p>
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
            설정 저장
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
