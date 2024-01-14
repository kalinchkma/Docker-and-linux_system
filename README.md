<!-- @format -->

## Docker

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

#### Login & Logout docker

- use `docker login` command for login
- use `docker logout` command for logout

#### Docker Command

```
 In linux by default we have add `sudo` on every command
```

| Command                                                                         | Description                                               |
| ------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `docker build -t 'name' 'source-path'`                                          | Build an docker image                                     |
| `docker image ls` or `docker images`                                            | See the all docker images that have beencreated           |
| `docker image ls -q`                                                            | It will return only image id                              |
| `docker image rm 'image_id'`                                                    | Remove the docker image id                                |
| `docker image rm -f 'image_id'` or `docker image rm 'id' --force`               | Remove the docker image id                                |
| `docker image rm $(docker image ls -q)`                                         | Remove all the images                                     |
| `docker container rm -f $(docker container ls -aq)` or `docker container prune` | Remove all the container                                  |
| `docker run 'image_name'`                                                       | Run the docker image                                      |
| `docker run -it 'image name'`                                                   | Run image and create docker container interactive mode    |
| `docker ps` or `docker ps -a`                                                   | See the running container                                 |
| `docker pull 'image name'`                                                      | Pull the image from sources                               |
| `docker run ubuntu` or `docker pull ubuntu`                                     | To create ubuntu image                                    |
| `docker run -p cointainer_port:host_port image_name`                            | map port                                                  |
| `docker ps`                                                                     | get running container                                     |
| `docker ps -a`                                                                  | get all running container                                 |
| `docker stop 'container_name/id`                                                | get all running container/ we can use first 3 digit of id |
| `docker start 'container_name/id` or `docker start -i 'id'`                     | start stoped container                                    |
| `docker container prune`                                                        | remove all inactive container                             |
| `docker run -p container_port:host_port image_name`                             | Port mapping to host                                      |

#### Live code with docker

```bash
docker run -p container_port:host_port -v "$(pwd):/container_directory_name -v /container_directory_name/node_modules image_name
```

This command will mount current working directory to container running app
directory

#### Publishing docker images

```bash
docker tag tag_name docker_username/name_of_image
```
```bash
docker push docker_username/name_of_image
```