# hyphae
Hyphae is an framework for deploying a network of sensors.

## potential applications
- home automation
- in-situ analytics over grids of sensors using clustered compute resources
- control spaces for autonomous vehicles
## design ideas
- Multi hub and spoke model
  - Raspberry Pi as hubs with ESP8266 as spokes
- Mesh network

### networking
https://www.open-mesh.org/projects/batman-adv/wiki/Doc-overview
https://github.com/binnes/WiFiMeshRaspberryPi/blob/master/part1/PIMESH.md

### disistributed computing
https://docs.docker.com/engine/swarm/ingress/

## Development Setup
1. Download aws cli https://aws.amazon.com/cli/
2. https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html