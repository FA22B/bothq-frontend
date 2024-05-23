export interface PluginData extends GroupValue {
  statusCode: number;
  message: string;
  pluginId: number;
}

export type PluginValue = CheckboxValue | GroupValue | SliderValue | ComboboxValue | RadioboxValue | TextboxValue;


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

export interface RadioboxValue extends ConfigValue {
  type: 'radiobox';
  value: string;
  options: string[];
}

export interface TextboxValue extends ConfigValue {
  type: 'textbox';
  value: string;
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

export interface ComboboxValue extends ConfigValue {
  type: 'combobox';
  value: string;
  options: string[];
}
