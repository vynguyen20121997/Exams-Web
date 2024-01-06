import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Chip,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { TABLE_HEAD_CLASS_MANAGEMENT } from "../../../../constants/constants";

const ClassManagementDataTable = ({
  handleOpenEdit,
  handleDelete,
  UserTableData,
}) => {
  return (
    <table className="mt-4 w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {TABLE_HEAD_CLASS_MANAGEMENT.map((head, index) => (
            <th
              key={head}
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                {head}{" "}
                {index !== TABLE_HEAD_CLASS_MANAGEMENT.length - 1 && (
                  <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                )}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {UserTableData?.map(({ title, createdAt, _id, active }, index) => {
          const isLast = index === UserTableData.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={index}>
              <td className={classes}>
                <div className="flex items-center gap-3">
                  <Avatar
                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-1024.png"
                    alt={_id}
                    size="sm"
                  />
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      lorem ipsum dolor sit amet, consectetur adip
                    </Typography>
                  </div>
                </div>
              </td>
              <td className={classes}>
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal opacity-70"
                  >
                    Lorem School
                  </Typography>
                </div>
              </td>
              <td className={classes}>
                <div className="w-max">
                  <Chip
                    variant="ghost"
                    size="sm"
                    value={active ? "Active" : "Inactive"}
                    color={active ? "green" : "blue-gray"}
                  />
                </div>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {createdAt}
                </Typography>
              </td>
              <td className={classes}>
                <Tooltip content="Edit Class">
                  <Menu>
                    <MenuHandler>
                      <IconButton>
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem onClick={handleOpenEdit}>Edit</MenuItem>
                      <MenuItem onClick={() => handleDelete(_id)}>
                        <>Delete</>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Tooltip>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ClassManagementDataTable;
