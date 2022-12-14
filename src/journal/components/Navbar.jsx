import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material'

export const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar
      position={'fixed'}
      sx={{ width: { sm: `calc(100% - ${drawerWidth}px)`, ml: { sm: `${drawerWidth}px` } } }}
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: 'nonee' } }}>
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" noWrap component="div">
            Journal App
          </Typography>

          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
