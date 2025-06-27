
import { Card, Group, Stack, Text, Title, Badge } from "@mantine/core";
import { AppIcons } from "@/shared/components/icons/AppIcons";
import { useBodyWeight } from "@/shared/hooks/useBodyWeight";

export function BodyWeight() {
    const { Weight } = AppIcons;
    const { weight } = useBodyWeight();
  return (
    <Card withBorder radius="md" p="xl" h="100%">
      <Stack gap="md" align="center">
        <Group gap="sm">
          <Weight size={28} color="gray" />
          <Title order={4}>Body Pressure</Title>
        </Group>
        <Text size="4rem" fw={700}>
          {weight}
        </Text>
        <Badge color="blue" variant="light">
          kg - Person in bed
        </Badge>
      </Stack>
    </Card>
  );
}
