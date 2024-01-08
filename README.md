<!-- @format -->

## Docker & Linux System

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

| Command                                                           | Description                                               |
| ----------------------------------------------------------------- | --------------------------------------------------------- |
| `docker build -t 'name' 'source-path'`                            | Build an docker image                                     |
| `docker image ls` or `docker images`                              | See the all docker images that have beencreated           |
| `docker image ls -q`                                              | It will return only image id                              |
| `docker image rm 'image_id'`                                      | Remove the docker image id                                |
| `docker image rm -f 'image_id'` or `docker image rm 'id' --force` | Remove the docker image id                                |
| `docker image rm $(docker image ls -q)`                           | Remove all the images                                     |
| `docker container rm -f $(docker container ls -aq)`               | Remove all the container                                  |
| `docker run 'image_name'`                                         | Run the docker image                                      |
| `docker run -it 'image name'`                                     | Run image and create docker container interactive mode    |
| `docker ps` or `docker ps -a`                                     | See the running container                                 |
| `docker pull 'image name'`                                        | Pull the image from sources                               |
| `docker run ubuntu` or `docker pull ubuntu`                       | To create ubuntu image                                    |
| `docker run -p cointainer_port:host_port image_name`              | map port                                                  |
| `docker ps`                                                       | get running container                                     |
| `docker ps -a`                                                    | get all running container                                 |
| `docker stop 'container_name/id`                                  | get all running container/ we can use first 3 digit of id |
| `docker container prune`                                          | remove all inactive container                             |

#### Basic Linux system

**_Type of user in Linux system_**

| Account Type   | Access Level                                                                                                       | useage                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Root User      | Super user of Linux system, Can execute any command, modify system, edit file etc                                  | Used to perform system administration tasks                                                         |
| Standard User  | Limited privileges and restricted to perform core system settings or other user accounts                           | Basic access                                                                                        |
| Sudo User      | Standard user who can perform root command                                                                         | Standard users who have access to root command                                                      |
| System account | User account for applications or automated services that need to perform specific tasks                            | Operate with restricted permissions                                                                 |
| Guest User     | Temporary accounts with restricted and controlled privileges                                                       | Users that need access for a limited time and do not require personal files and settings            |
| User Groups    | Permissions are assigned to a collection of users who are organized into logical groups with identical permissions | Admins can manage permissions for an entire user group instead of managing individual user accounts |

**_ Linux command_**

| Command                       | Description                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------------- |
| `whoami`                      | Check the current use                                                                               |
| `echo $0`                     | `$0` is a variable number of a bash program `echo` is for print                                     |
| `history`                     | To see executed command so far on the machine we can also run `!1` to print history of command      |
| `apt list`                    | To see the packages on the local DB                                                                 |
| `apt update`                  | It update the package database NT: before installing the package you should always run this command |
| `apt install 'package name'`  | Install package on the system                                                                       |
| `apt remove 'package name'`   | Remove package from the system                                                                      |
| `pwd`                         | Print working directory                                                                             |
| `mv file destination/newname` | We can use `mv` command to move file or rename file                                                 |
| `cat 'file-path'`             | See the file content, NT. this is usefull for short file                                            |
| `more 'file-path'`            | See the file content and it's usefull for long file                                                 |
| `less 'file path'`            | See the file content                                                                                |
| `cat /etc/passwd`             | list all avaliable users                                                                            |
| `cat /etc/group`              | list all avaliable group                                                                            |
| `sudo useradd username`       | create new user                                                                                     |
| `sudo adduser username`       | automatically create user default shell                                                             |
| `sudo sh`                     | switch to root user shell                                                                           |

**_How to retrieve forgoted user password_**

| Command               | Description                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| `mount -o remount,rw` | to retrieve forgotten password, remount file system, this command execute on recovery mode |
| `passwd username`     | change user password                                                                       |

**_Simple user setting_**

`usermod` command used to modify user settings

- `-d` - Changes the user's home directory
- `-s` - Changes the user's default shell
- `-e` - Sets an account expiry date
- `-c` - Adds a comment to the user's entry
- `-u` - Changes the user's UID
- `-aG` - Add the user to supplementary groups without removeing existing group
  memberships

| Command                                 | Description                                             |
| --------------------------------------- | ------------------------------------------------------- |
| `sudo userdel username`                 | delete the user                                         |
| `sudo userdel -r username`              | `-r` option user to delete user home dir and main spool |
| `sudo groupadd group_name`              | create new user group                                   |
| `getent group group_name`               | get group                                               |
| `sudo adduser user_username group_name` | add user to group                                       |
| `groups user_username`                  | check user groups                                       |
| `sudo deluser user_usernem group_name`  | delete user from specific group                         |
| `id user_username`                      | display all group members of user                       |
| `id -nG username`                       | display user group member names                         |
| `sudo usermod -aG group_name username`  | add user to new group without removing current group    |
