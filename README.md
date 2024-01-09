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
| `docker start 'container_name/id` or `docker start -i 'id'`       | start stoped container                                    |
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

| Command                 | Description                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| `mount -o remount,rw /` | to retrieve forgotten password, remount file system, this command execute on recovery mode |
| `passwd username`       | change user password                                                                       |

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

**_Hardware Information Commands_**

| Command                           | Description                                                                                  |
| --------------------------------- | -------------------------------------------------------------------------------------------- |
| `lscpu`                           | CPU information                                                                              |
| `lsblk`                           | Information about block devices                                                              |
| `lspci -tv`                       | show PCI devices like graphics card, netword card etc                                        |
| `lsusb -tv`                       | display use devices                                                                          |
| `lshw`                            | list hardware configuration information                                                      |
| `cat /proc/cpuinfo`               | show details CPU information                                                                 |
| `cat /proc/meminfo`               | View detailed system memory information                                                      |
| `cat /proc/mounts`                | See mounted file systems                                                                     |
| `free -h`                         | Display free and used memory                                                                 |
| `sudo dmidecode`                  | Show hardware information from the BIOS                                                      |
| `hdparm -i /dev/[device_name]`    | Display disk data information                                                                |
| `hdparm -tT /dev/[device_name]`   | Conduct a read speed test on the device/disk                                                 |
| `badblocks -s /dev/[device_name]` | Test for unreadable blocks on the device/disk                                                |
| `fsck /dev/[device_name]`         | Run a disk check on an unmounted disk or partition [! this command might damage file system] |

**_Searching Commands_**

| Command                                         | Description                                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| `find [path] -name [search_pattern]`            | Find files and directories that match the specified pattern in a specified location |
| `find [path] -size [+100M]`                     | See files and directories larger than a specified size in a directory               |
| `grep [search_pattern] [file_name]`             | Search for a specific pattern in a file with grep                                   |
| `grep -r [search_pattern] [directory_name]`     | Recursively search for a pattern in a directory                                     |
| `locate [name]`                                 | Locate all files and directories related to a particular name                       |
| `which [command]`                               | Search the command path in the $PATH environment variable                           |
| `whereis [command]`                             | Use the whereis command to find the source, binary, and manual page for a command   |
| `awk '[search_pattern] {print $0}' [file_name]` | Print all lines matching a pattern in a file                                        |
| `sed 's/[old_text]/[new_text]/' [file_name]`    | Find and replace text in a specified file                                           |

**_File commands_**

| Command                                            | Description                                                   |
| -------------------------------------------------- | ------------------------------------------------------------- |
| `mkdir [directory_name]`                           | Create a new directory                                        |
| `rm [file_name]`                                   | Remove file                                                   |
| `rm -r [directory_name]`                           | Remove a directory recursively                                |
| `rm -rf [directory_name]`                          | Recursively remove a directory without requiring confirmation |
| `cp [source_file] [destination_file]`              | Copy the contents of one file to another file                 |
| `cp -r [source_directory] [destination_directory]` | Recursively copy a directory to a second directory            |
| `mv [source_file] [destination_file]`              | Move or rename files or directories.                          |
| `touch [file_name]`                                | Create a new file using touch                                 |
| `cat [file_name]`                                  | Show the contents of a file                                   |
| `cat [source_file] >> [destination_file]`          | Append file contents to another file                          |
| `head [file_name]`                                 | Show the first ten lines of a file                            |
| `tail [file_name]`                                 | Show the last ten lines of a file                             |
| `more [file_name]`                                 | Display contents of a file page by page                       |
| `less [file_name]`                                 | Show the contents of a file with navigation                   |
| `nano [file_name]`                                 | Open or create a file using the nano text editor              |
| `gpg -c [file_name]`                               | Encrypt a file                                                |
| `gpg [file_name].gpg`                              | Decrypt an encrypted .gpg file                                |
| `wc -w [file_name]`                                | Show the number of words, lines, and bytes in a file          |

**_Directory Navigation_**

| Command               | Description                                             |
| --------------------- | ------------------------------------------------------- |
| `ls`                  | List files and directories in the current directory     |
| `ls -a`               | List all files and directories in the current directory |
| `ls -l`               | List files and directories in long format               |
| `pwd`                 | Show the directory you are currently working in         |
| `cd [directory_path]` | Change directory                                        |
| `dirs`                | Show current directory stack                            |

**_File Compression commands_**

| Command                                        | Description                           |
| ---------------------------------------------- | ------------------------------------- |
| `tar cf [archive.tar] [file/directory]`        | Archive an existing file or directory |
| `tar xf [archive.tar]`                         | Extract an archived file              |
| `tar czf [archive.tar.gz] [files.......]`      | Create a .gz compressed tar archive   |
| `gzip [file_name]`, `gunzip [file_name.gz]`    | Compress or decompress .gz files      |
| `bzip2 [file_name]`, `bunzip2 [file_name.bz2]` | Compress or decompress .bz2 files     |

**_File Transfer Commands_**

| Command                                                                          | Description                                                             |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `scp [user]@[remote_host]:[destination_path_remote] [destination_path_local]`    | Copy a file to a server directory securely                              |
| `scp -r [user]@[remote_host]:[destination_path_remote] [destination_path_local]` | Copy a file recursively to a server directory securely                  |
| `rsync -a [source_directory] [user]@[remote_host]:[destination_directory]`       | Synchronize the contents of a directory with a backup directory         |
| `wget [link]`                                                                    | Download files from FTP or web servers                                  |
| `curl -O [link]`                                                                 | Transfer data to or from a server with various protocols                |
| `ftp [remote_host]`                                                              | Transfer files between local and remote systems interactively using FTP |
| `sftp [user]@[remote_host]`                                                      | Securely transfer between local and remote hosts using SFTP             |

**_User and Group Commands_**

| Command                                     | Description                                                   |
| ------------------------------------------- | ------------------------------------------------------------- |
| `id`                                        | See details about the active users                            |
| `last`                                      | Show the last system logins                                   |
| `who`                                       | Display who is currently logged into the system               |
| `w`                                         | Show which users are logged in and their activity             |
| `finger [user_name]`                        | Show user information                                         |
| `sudo useradd [user_name]`                  | Create a new user account                                     |
| `sudo adduser [user_name]`                  | Create a new user account                                     |
| `sudo userdel [user_name]`                  | Delete user account                                           |
| `sudo usermod -aG [group_name] [user_name]` | Modify user information or add user to group                  |
| `passwd` or `sudo passwd [user_name]`       | Change the current user's password or another user's password |
| `sudo groupadd [group_name]`                | add a new group                                               |
| `sudo groupdel [group_name]`                | Delete a group                                                |
| `sudo groupmod -n [new_name] [old_name]`    | Change or modify user group                                   |
| `su - [user_name]`                          | Switch the user account or become a superuser                 |
| `chgrp [group_name] [file/directory]`       | Change file or directory group                                |

**_Package Installation Commands_**

Debian

| Command                               | Description                                    |
| ------------------------------------- | ---------------------------------------------- |
| `sudo apt-get install [package_name]` | Install an APT package                         |
| `sudo apt install [package_name]`     | Install an APT package using a newer APT       |
| `apt search [keyword]`                | Search for a package in the APT repositories   |
| `apt list`                            | List packages installed                        |
| `apt show [package_name]`             | Show information about a package               |
| `sudo dpkg -i [package_name.deb]`     | Install a .deb package with the Debian package |
| `sudo dpkg -l`                        | List packages installed with dpkg              |

Red Hat

| Command                           | Description                                                          |
| --------------------------------- | -------------------------------------------------------------------- |
| `sudo yum install [package_name]` | Install a package using the YUM package manager                      |
| `yum search [keyword]`            | Find a package in the YUM repositories based on the provided keyword |
| `yum list installed`              | List all packages installed with YUM                                 |
| `yum info [package_name]`         | Show package information for a package                               |
| `sudo dnf install [package_name]` | Install a package using the DNF package manager                      |
| `sudo rpm -i [package_name.rpm]`  | Install a .rpm package from a local file                             |
