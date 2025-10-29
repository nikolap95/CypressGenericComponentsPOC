import { componentRegistry } from './componentRegistry';

export function createComponentByName(name) {
  const ComponentClass = componentRegistry[name];
  if (!ComponentClass)
    throw new Error(`Component "${name}" not found in registry`);
  return new ComponentClass();
}