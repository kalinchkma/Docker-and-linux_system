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

| Command | Description |
| ------- | ----------- |

| `docker build -t 'name' 'source-path'`|Build an docker image|
|`docker image ls`|See the all docker images that have been created|
