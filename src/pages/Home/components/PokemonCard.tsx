import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

type PokemonCardProps = {
  imagePath: string;
  name: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ imagePath, name }) => {
  return (
    <Box width={"120px"}>
      <Card>
        <CardMedia component={"img"} image={imagePath} />
        <CardContent>
          <Typography variant="body1">{name}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonCard;
