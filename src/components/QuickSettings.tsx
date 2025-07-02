
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Settings, Smartphone, Clock, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickSettingsProps {
  walkingDetection: boolean;
  lyingDetection: boolean;
  exerciseMode: boolean;
  walkingSensitivity: number;
  lyingSensitivity: number;
  onWalkingDetectionChange: (value: boolean) => void;
  onLyingDetectionChange: (value: boolean) => void;
  onExerciseModeChange: (value: boolean) => void;
  onWalkingSensitivityChange: (value: number[]) => void;
  onLyingSensitivityChange: (value: number[]) => void;
}

const QuickSettings = ({
  walkingDetection,
  lyingDetection, 
  exerciseMode,
  walkingSensitivity,
  lyingSensitivity,
  onWalkingDetectionChange,
  onLyingDetectionChange,
  onExerciseModeChange,
  onWalkingSensitivityChange,
  onLyingSensitivityChange
}: QuickSettingsProps) => {
  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <Settings className="h-5 w-5 text-green-500" />
            빠른 설정 ⚡
          </CardTitle>
          <Link to="/settings">
            <Button variant="outline" size="sm">
              전체 설정
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 보행 감지 */}
          <div className="space-y-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-orange-500" />
                <Label className="text-sm font-medium">보행 감지</Label>
              </div>
              <Switch
                checked={walkingDetection}
                onCheckedChange={onWalkingDetectionChange}
              />
            </div>
            {walkingDetection && (
              <div className="space-y-2">
                <Label className="text-xs text-gray-600 dark:text-gray-400">
                  민감도: {walkingSensitivity}%
                </Label>
                <Slider
                  value={[walkingSensitivity]}
                  onValueChange={onWalkingSensitivityChange}
                  max={100}
                  min={10}
                  step={10}
                  className="w-full"
                />
              </div>
            )}
          </div>

          {/* 침대 감지 */}
          <div className="space-y-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-500" />
                <Label className="text-sm font-medium">침대 감지</Label>
              </div>
              <Switch
                checked={lyingDetection}
                onCheckedChange={onLyingDetectionChange}
              />
            </div>
            {lyingDetection && (
              <div className="space-y-2">
                <Label className="text-xs text-gray-600 dark:text-gray-400">
                  민감도: {lyingSensitivity}%
                </Label>
                <Slider
                  value={[lyingSensitivity]}
                  onValueChange={onLyingSensitivityChange}
                  max={100}
                  min={10}
                  step={10}
                  className="w-full"
                />
              </div>
            )}
          </div>

          {/* 운동 모드 */}
          <div className="space-y-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PlayCircle className="h-4 w-4 text-green-500" />
                <Label className="text-sm font-medium">운동 모드</Label>
              </div>
              <Switch
                checked={exerciseMode}
                onCheckedChange={onExerciseModeChange}
              />
            </div>
            <Badge 
              variant={exerciseMode ? "default" : "secondary"}
              className="text-xs"
            >
              {exerciseMode ? "활성화" : "비활성화"}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickSettings;
