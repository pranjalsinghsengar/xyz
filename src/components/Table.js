import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ActionMenu from "./ActionMenu";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";



const Table = () => {
  const [showForm, setShowForm] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const handleEdit = (itemId) => {
    setShowForm(!showForm);
    setEditItemId(itemId);
  };
  
  const [formData, setFormData] = useState({
    developerName: '',
    relationshipManager: '',
    projectName: '',
    unitNumber: '',
    areaSoft: '',
  });
  const columns = [
    {
      field: "id",
      headerName: "Sr. No.",
      width: 100,
      renderCell: (params) => (
        <>
          <Checkbox color='primary' />
          {params.value}
        </>
      ),
    },
    { field: "clientName", headerName: "Client Name", width: 150 },
    { field: "agentName", headerName: "Agent Name", width: 150 },
    { field: "unitName", headerName: "Unit Name", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "registrationDate", headerName: "Registration Date", width: 150 },
    { field: "bookingAmount", headerName: "Booking Amount", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <ActionMenu onEdit={() => handleEdit(params.row.id)} />
      ),
    },
  ];
  const [rows, setRows] = useState([
    {
      id: 1,
      clientName: 'Client 1',
      agentName: 'Agent 1',
      unitName: 'Unit 1',
      status: 'Active',
      registrationDate: '2023-10-15',
      bookingAmount: '$5000',
    },
    {
      id: 2,
      clientName: 'Client 2',
      agentName: 'Agent 2',
      unitName: 'Unit 2',
      status: 'Inactive',
      registrationDate: '2023-10-10',
      bookingAmount: '$3000',
    },
    {
      id: 3,
      clientName: 'Client 3',
      agentName: 'Agent 3',
      unitName: 'Unit 3',
      status: 'Active',
      registrationDate: '2023-10-05',
      bookingAmount: '$7000',
    },
  ]);

  const XtoggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        clientName: formData.developerName,
        agentName: formData.relationshipManager,
        unitName: formData.projectName,
        status: 'Active', 
        registrationDate: 'YYYY-MM-DD', 
        bookingAmount: '$0',
      },
    ]);
    setFormData({
      developerName: '',
      relationshipManager: '',
      projectName: '',
      unitNumber: '',
      areaSoft: '',
    });
    
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex ",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex ",
            justifyContent: "space-between",
            width: "70%",
            margin:"50px 0"
          }}
        >
          <h3>Bookings</h3>
          <Button variant='contained' color='primary' onClick={XtoggleForm}>
            Add Booking
          </Button>
        </div>
      </div>

      <Container
        sx={{
          backgroundColor: "#fcfafa",
          border: `1px solid #fdc656`,
          padding: "16px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          borderRadius: 3,
        }}
      >
        {showForm ? (
  
            <>
              <Typography variant="h5" gutterBottom>
                Developer Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Developer Name"
                    variant="outlined"
                    fullWidth
                    name="developerName"
                    value={formData.developerName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Relationship Manager"
                    variant="outlined"
                    fullWidth
                    name="relationshipManager"
                    value={formData.relationshipManager}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
    
              <Typography variant="h5" gutterBottom>
                Unit Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Project Name"
                    variant="outlined"
                    fullWidth
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Unit Number"
                    variant="outlined"
                    fullWidth
                    name="unitNumber"
                    value={formData.unitNumber}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Area Soft"
                    variant="outlined"
                    fullWidth
                    name="areaSoft"
                    value={formData.areaSoft}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
    
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </>
          
        ) : 
          

          editItemId ? (
            <>
              <Typography variant="h5" gutterBottom>
                Edit Booking
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Developer Name"
                    variant="outlined"
                    fullWidth
                    name="developerName"
                    value={{}}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Relationship Manager"
                    variant="outlined"
                    fullWidth
                    name="relationshipManager"
                    value={{}}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
        
              <Typography variant="h5" gutterBottom>
                Unit Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Project Name"
                    variant="outlined"
                    fullWidth
                    name="projectName"
                    value={{}}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Unit Number"
                    variant="outlined"
                    fullWidth
                    name="unitNumber"
                    value={{}}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Area Soft"
                    variant="outlined"
                    fullWidth
                    name="areaSoft"
                    value={{}}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
        
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </>
          )
          :
          (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant='h5' gutterBottom sx={{ fontWeight: "bold" }}>
                All Bookings
              </Typography>
              <div>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <TextField
                  label='Search'
                  variant='outlined'
                  sx={{ width: "80%", marginBottom: "16px" }}
                  placeholder='Search...'
                />
              </div>
            </div>

            <div style={{ width: "100%", flex: "1" }}>
              <DataGrid rows={rows} columns={columns} autoHeight />
            </div>
          </>
        )}
      </Container>
    </>
  );
};
export default Table;
