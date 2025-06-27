
import { Card, Stack, Group, Title, Text, Badge } from "@mantine/core";
import { AppIcons } from "@/shared/components/icons/AppIcons";
import { useHeartRateData } from "@/shared/hooks/useHeartRateData";

export function HeartRateCard( ) {
    const {Heart} =  AppIcons;
    const {rate, status} = useHeartRateData();

    return(
          <Card withBorder radius="md" p="xl" h="100%">
            <Stack gap="md" align="center">
              <Group gap="sm">
                <Heart size={28} color="red" />
                <Title order={4}>Heart Rate</Title>
              </Group>
              <Text size="4rem" fw={700}>
                {rate}
              </Text>
              <Badge color={status === "Normal" ? "green" : "red" } variant="light">
                BPM - {status}
              </Badge>
            </Stack>
          </Card>
    );
   
}