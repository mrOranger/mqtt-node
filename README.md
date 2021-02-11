# MQTT Server
The project contains an MQTT server (developed by using __Aedes__) and a Web Server (developed by using __Express__).
## Basic Scenario
The basic scenario in which is project is going to operate is the following: a physical device developed by using __Arduino__, sends a request to the Web Server about the name of the Pharaoh used as password to open a box. 
The MQTT server is used to coordinate all the other devices connected to the Broker. Doing this, when the box is open and the game is finished, a message relative to a specific topic will be send to the other devices, indicating that the game is finished.
### Author
Edoardo Oranger, Università degli Studi di Bari, Dipartimento di Informatica. 
### Licence
This simple project is under __Common Creative__ Licence.