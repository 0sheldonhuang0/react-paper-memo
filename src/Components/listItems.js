import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

export const mainListItems = (
  <div>
    <ListItem button component="a" href="https://xd.sh.cn/ppmemo-1-0-0/">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="使用说明" />
    </ListItem>
    <ListItem button component="a" href="https://xd.sh.cn">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="更多工具" />
    </ListItem>
    <ListItem button component="a" href="https://xd.sh.cn/react-app-setup-ppmemo/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="技术总结" />
    </ListItem>
  </div>
);

export const secondaryListItems = <div></div>;
