export interface PluginData {
  statusCode: number;
  message: string;
  pluginId: number;
  type: string;
  uniqueId: string;
  enabled: boolean;
  displayName: string;
  value: PluginValue[];
}

export type PluginValue = CheckboxValue | GroupValue | SliderValue;

export interface CheckboxValue {
  type: 'checkbox';
  uniqueId: string;
  enabled: boolean;
  displayName: string;
  value: boolean;
}

export interface GroupValue {
  type: 'group';
  uniqueId: string;
  enabled: boolean;
  displayName: string;
  value: PluginValue[];
}

export interface SliderValue {
  type: 'slider';
  uniqueId: string;
  enabled: boolean;
  displayName: string;
  value: number;
  minValue: number;
  maxValue: number;
  step: number;
}
