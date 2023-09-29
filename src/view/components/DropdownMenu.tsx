import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '../../app/utils/cn';

function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return (
    <RadixDropdownMenu.Root>
      { children }
    </RadixDropdownMenu.Root>
  )
}

{ /* asChild: prop para evitar q button padrao do trigger seja criado em cima do children, pois la vai ter outro button */ }
function DropdownMenuTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RadixDropdownMenu.Trigger className='outline-none' asChild> 
      { children }
    </RadixDropdownMenu.Trigger>
  )
}

interface DropdownMenuItemContent {
  children: React.ReactNode;
  className?: string;
}

function DropdownMenuContent({ children, className }: DropdownMenuItemContent) {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content 
        side='bottom'
        className={cn(
          'rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-[90]',
          'data-[side=bottom]:animate-slideUpAndFade',
          'data-[side=top]:animate-slideDownAndFade', 
          className)}>
        { children }
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  )
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onSelect?(): void;
}

function DropdownMenuItem({ children, className, onSelect }: DropdownMenuItemProps) {
  return (
    <RadixDropdownMenu.Item 
      onSelect={onSelect}
      className={cn(
        'min-h-[40px] outline-none flex items-center py-2 px-4 text-gray-800 text-sm data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer',
        className
    )} >
      { children }
    </RadixDropdownMenu.Item>
  )
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem
}