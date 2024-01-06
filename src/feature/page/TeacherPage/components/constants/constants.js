import {
    AcademicCapIcon,
    BookOpenIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    UserCircleIcon,
    UserIcon
} from "@heroicons/react/24/solid";
import { PATHS } from "../../../../../constants/urls";

export const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

export const navListMenuItems = [
    {
        title: "@material-tailwind/html",
        description:
            "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
        title: "@material-tailwind/react",
        description:
            "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
        title: "Material Tailwind PRO",
        description:
            "A complete set of UI Elements for building faster websites in less time.",
    },
];

export const navListItems = [
    {
        label: "User Management",
        icon: UserIcon,
        path:  "/"+PATHS.admin_home
    },
    {
        label: "Subject Management",
        icon: BookOpenIcon,
        path:  "/"+PATHS.admin_subject_managment

    },
    {
        label: "Class Management",
        icon: AcademicCapIcon,
        path:  "/"+PATHS.admin_class_management

    },
];
