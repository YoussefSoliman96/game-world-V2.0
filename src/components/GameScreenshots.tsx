import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 3 }}
      spacing={2}
      marginY={3}
    >
      {data?.results?.map((img) => (
        <Image key={img.id} src={img.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
