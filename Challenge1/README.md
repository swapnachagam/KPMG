In creating the resources required for the application 
I have used cloud formation previously in creating the pre-requisites for creating an application 
Used Cloud formation to create VPC, Subnets, Security Groups, NAT gateway and routing tables 
Assuming, all of this is present, i usually create instances using AWS ec2 module from Ansible 

For this exercise here, Used cloud formation for below activities 
    Mentioned the parameters required for creating the resources 
        VPC
        Subnet
        Instance configuration 
        Base AMI to be used
In resources section, mentioned the resources to be spinned up like database and web server 

