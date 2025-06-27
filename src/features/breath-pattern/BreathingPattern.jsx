import {Card, Stack, Group, Title, Badge, Text, Progress} from "@mantine/core";
import {AppIcons} from "@/shared/components/icons/AppIcons";
import { useBreathingPattern } from "@/shared/hooks/useBreathingPattern";

export function BreathingPattern() {
    const {Breath} = AppIcons;
    const {intensity, status, rhythm} = useBreathingPattern();
    return(
          <Card withBorder radius="md" p="xl" h="100%">
            <Stack gap="md">
              <Group justify="space-between">
                <Group gap="sm">
                  <Breath size={28} color="orange" />
                  <Title order={4}>Breathing Pattern</Title>
                </Group>
                <Badge color="lime">{status}</Badge>
              </Group>
              <Stack gap="xs">
                <Text size="sm">Breathing Intensity</Text>
                <Progress value={intensity} color="orange" size="lg" radius="sm" />
                <Text size="xs" c="dimmed" ta="right">
                  {rhythm}
                </Text>
              </Stack>
            </Stack>
          </Card>
       

    )
}