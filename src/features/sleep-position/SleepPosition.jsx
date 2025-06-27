import { Card, Group, Stack, Text, Title } from '@mantine/core';
import { AppIcons } from '@/shared/components/icons/AppIcons';
import { useSleepPosition } from '@/shared/hooks/usePosition';

export function SleepPosition() {
    const { Position } = AppIcons;
    const { position, angle } = useSleepPosition();
  return (
    <Card withBorder radius="md" p="xl" h="100%">
      <Stack gap="md">
        <Group gap="sm">
          <Position size={28} color="pink" />
          <Title order={4}>Body Position</Title>
        </Group>
        <Stack gap="xs">
          <Group justify="space-between">
            <Text size="sm">Position:</Text>
            <Text size="sm">{position}</Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm">Neck Angle:</Text>
            <Text size="sm">{angle}</Text>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
}
