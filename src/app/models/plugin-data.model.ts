export interface PluginData extends GroupValue {
  statusCode: number;
  message: string;
  pluginId: number;
}

export type PluginValue = CheckboxValue | GroupValue | SliderValue | SelectValue;


export interface ConfigValue {
  type: string;
  uniqueId: string;
  enabled: boolean;
  displayName: string;
  description?: string;
  value: any;
}

export interface CheckboxValue extends ConfigValue {
  type: 'checkbox';
  value: boolean;
}

export interface GroupValue extends ConfigValue {
  type: 'group';
  value: PluginValue[];
}

export interface SliderValue extends ConfigValue {
  type: 'slider';
  value: number;
  minValue: number;
  maxValue: number;
  step: number;
}

export interface SelectValue extends ConfigValue {
  type: 'select';
  value: string;
  options: string[];
}
