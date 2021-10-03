# gRPC Discount Api

A simple api with gRPC that performs the calculation of the product discount
***
***

## Installation with docker:

```sh
docker-compose up
```
***

## Installation without docker:

```sh
yarn
```

## Build:
#### 1. Generate protos:
```sh
yarn build:proto
```
#### 2. build executable

```sh
yarn build
```

## Run:

```sh
yarn start
```
## Test:

```sh
yarn test
```


To test the project you will need import the proto's on [BloomRPC](https://github.com/uw-labs/bloomrpc) 


***
### Made with:
[Node.js gRPC](https://grpc.io/grpc/node/grpc.html)

[TypeScript gRPC ](https://github.com/agreatfool/grpc_tools_node_protoc_ts)

[Typescript](https://www.typescriptlang.org/)

[tscpaths](https://github.com/joonhocho/tscpaths#readme)

[inversify](https://inversify.io/)