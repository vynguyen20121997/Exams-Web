import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";

export const CreateExamsListTopic = () => {
  return (
    <>
      {/* <Typography variant="h4" color="black" className=" text-black-500 pb-5">
        SUBJECT NAME
      </Typography> */}

      <Card className="w-96">
        <List>
          <ListItem>
            Topic 1
            <ListItemSuffix>
              <Chip
                value="14"
                variant="ghost"
                size="sm"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            Topic 2
            <ListItemSuffix>
              <Chip
                value="2"
                variant="ghost"
                size="sm"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            Topic 3
            <ListItemSuffix>
              <Chip
                value="40"
                variant="ghost"
                size="sm"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </List>
      </Card>
    </>
  );
};
