# Architecture Overview

## Overview

WebGISApp is a municipal WebGIS application built on a hybrid architecture that combines web application services, GIS services, and business data.

The application uses ASP.NET MVC for application and business logic, ArcGIS Maps SDK for JavaScript 4.30 for map-based functionality, ArcGIS Server 10.2 for GIS services, and SQL Server for business and spatial data storage.

## Architecture

```text
                            User
                              │
                              ▼
                        Web Browser
                              │
                ┌─────────────┴─────────────┐
                │                           │
                ▼                           ▼
        Web Application                GIS Client
        HTML / CSS / JS               ArcGIS Maps SDK
        Bootstrap 5                     JavaScript 4.30
                │                           │
                ▼                           ▼
          ASP.NET MVC                 ArcGIS Server 10.2
                │                           │
                ▼                           ▼
          SQL Server              Enterprise Geodatabase
        Business Data                  SQL Server
                │
                └──────────────┐
                               │
                               ▼
                    Combined Information
                         Presentation
                               │
                               ▼
                            User
```

## Main Components

### Frontend

The client-side application is implemented using:

* HTML
* CSS
* JavaScript
* Bootstrap 5
* ArcGIS Maps SDK for JavaScript 4.30

The frontend provides the map interface, user interaction, spatial operations, search, drawing, measurement, editing, and visualization capabilities.

### Application Layer

ASP.NET MVC is responsible for the web application and business logic.

Main responsibilities include:

* Request handling
* Business logic
* User management
* Authentication
* Business data access
* Application-level operations
* Integration of GIS information with business information

### GIS Layer

ArcGIS Maps SDK for JavaScript 4.30 provides the client-side GIS functionality.

The application communicates with ArcGIS Server 10.2 to consume and interact with GIS services.

GIS-related operations include:

* Feature visualization
* Feature selection
* Spatial queries
* Identify
* Editing
* Drawing
* Measurement
* Map printing
* Thematic visualization

### GIS Server

ArcGIS Server 10.2 provides the GIS services consumed by the WebGIS application.

These services provide access to spatial datasets stored in the Enterprise Geodatabase.

### Database Layer

SQL Server is used for application and GIS data storage.

The database layer consists of:

* Business Data
* Enterprise Geodatabase

The Enterprise Geodatabase stores and manages spatial datasets used by ArcGIS Server.

## Data Flow

The application follows two main data paths.

### GIS Data Flow

```text
Web Browser
    │
    ▼
ArcGIS Maps SDK for JavaScript
    │
    ▼
ArcGIS Server
    │
    ▼
Enterprise Geodatabase
```

GIS requests are handled directly through the ArcGIS client and ArcGIS Server services.

### Business Data Flow

```text
Web Browser
    │
    ▼
ASP.NET MVC
    │
    ▼
SQL Server
```

Business-related requests are handled through the ASP.NET MVC application layer.

## Combined Information

One of the important characteristics of the application is the combination of GIS information and business information.

Spatial information is obtained through ArcGIS services, while business information is handled through the ASP.NET MVC application and SQL Server.

These two information sources can be combined at the application/presentation level to provide integrated information to the user.

```text
              GIS Information
                    │
                    │
                    ▼
             ┌─────────────┐
             │   WebGIS    │
             │ Presentation│
             └─────────────┘
                    ▲
                    │
                    │
            Business Information
```

## Deployment

The application is deployed on IIS.

The main deployment components are:

* ASP.NET MVC Web Application
* ArcGIS Server 10.2
* SQL Server
* Enterprise Geodatabase

```text
                         IIS
                          │
                          ▼
                   ASP.NET MVC
                          │
                          ▼
                      SQL Server


                    ArcGIS Server
                          │
                          ▼
                Enterprise Geodatabase
                          │
                          ▼
                      SQL Server
```

## Architecture Characteristics

The architecture provides a separation between:

* Web application responsibilities
* GIS visualization and spatial operations
* Business logic
* Spatial data management
* Business data management

This separation allows the WebGIS application to use ArcGIS capabilities while maintaining application-specific business functionality through ASP.NET MVC and SQL Server.
