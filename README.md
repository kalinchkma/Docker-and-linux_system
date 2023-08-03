<!-- @format -->

## Docker Notes

#### What is Docker?

- Docker is a platform for building, running and shipping applications

##### Virtual Machines vs Containers

- Container:
  - Container is an isolated environment for running an application
  - Container lightweight
  - Use OS of the host
  - Start quickly
  - Use less Hardware resources
  - Container don't contains full OS
- Virtual Machine:
  - VM is an abstraction of a machine or physical hardware
  - We can create VM using a sof called `Hypervisors`
  - VM use actual os and Hardware resources
  - VM contains full OS on it

#### Architecture of Docker

- Docker uses a client server architecture

#### Docker Command

```
 In linux by default we have add `sudo` on every command
```

| Command                                     | Description                                     |
| ------------------------------------------- | ----------------------------------------------- |
| `docker build -t 'name' 'source-path'`      | Build an docker image                           |
| `docker image ls` or `docker images`        | See the all docker images that have beencreated |
| `docker run 'image_name'`                   | Run the docker image                            |
| `docker run -it 'image name'`               | Run docker container interactive mode           |
| `docker ps` or `docker ps -a`               | See the running container                       |
| `docker pull 'image name'`                  | Pull the image from sources                     |
| `docker run ubuntu` or `docker pull ubuntu` | To create ubuntu image                          |

#### Basic Linux command

| Command                      | Description                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------------- |
| `whoami`                     | Check the current use                                                                               |
| `echo $0`                    | `$0` is a variable number of a bash program `echo` is for print                                     |
| `history`                    | To see executed command so far on the machine we can also run `!1` to print history of command      |
| `apt list`                   | To see the packages on the local DB                                                                 |
| `apt update`                 | It update the package database NT: before installing the package you should always run this command |
| `apt install 'package name'` | Install package on the system                                                                       |
