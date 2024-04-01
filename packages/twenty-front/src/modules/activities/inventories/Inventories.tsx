import AnimatedPlaceholder from '@/ui/layout/animated-placeholder/components/AnimatedPlaceholder';
import {
    AnimatedPlaceholderEmptyContainer,
    AnimatedPlaceholderEmptySubTitle,
    AnimatedPlaceholderEmptyTextContainer,
    AnimatedPlaceholderEmptyTitle,
  } from '@/ui/layout/animated-placeholder/components/EmptyPlaceholderStyled';
import { Button } from '@/ui/input/button/components/Button';
import { IconPlus } from '@/ui/display/icon';
  
export const Inventories = () => {
    return (
    <AnimatedPlaceholderEmptyContainer>
        <AnimatedPlaceholder type="noNote" />
        <AnimatedPlaceholderEmptyTextContainer>
          <AnimatedPlaceholderEmptyTitle>
            No Inventory
          </AnimatedPlaceholderEmptyTitle>
          <AnimatedPlaceholderEmptySubTitle>
            There are no inventories with this record.
          </AnimatedPlaceholderEmptySubTitle>
        </AnimatedPlaceholderEmptyTextContainer>
        <Button
          Icon={IconPlus}
          title="New Inventory"
          variant="secondary"
          onClick={() => {}
          }
        />
      </AnimatedPlaceholderEmptyContainer>
        );
}