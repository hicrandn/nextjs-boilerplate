import DropdownSidebar from "./sidebar/DropdownSidebar";
import BasicSidebar from "./sidebar/BasicSidebar";
import AnimatedSidebar from "./sidebar/AnimatedSidebar";
import BasicLogin from "./login/BasicLogin";
import BasicButton from "./button/BasicButton";
import GlassyButton from "./button/GlassyButton";
import DarkLogin from "./login/DarkLogin";
import BasicHeader from "./header/BasicHeader";

export const SideBar = {
  Basic: BasicSidebar,
  Dropdown: DropdownSidebar,
  Animated: AnimatedSidebar,
};

export const Login = {
  Basic: BasicLogin,
  Dark: DarkLogin,
};

export const Button = {
  Basic: BasicButton,
  Glassy: GlassyButton,
};

export const header = {
  Basic: BasicHeader,
}
