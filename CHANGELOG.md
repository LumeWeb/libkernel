# [0.1.0-develop.38](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.37...v0.1.0-develop.38) (2023-09-02)

# [0.1.0-develop.37](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.36...v0.1.0-develop.37) (2023-09-02)

# [0.1.0-develop.36](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.35...v0.1.0-develop.36) (2023-08-20)

# [0.1.0-develop.35](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.34...v0.1.0-develop.35) (2023-08-10)

# [0.1.0-develop.34](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.33...v0.1.0-develop.34) (2023-07-29)


### Bug Fixes

* change callModule wrapper signature and correctly call callModule ([2adbddc](https://git.lumeweb.com/LumeWeb/libkernel/commit/2adbddc769e00767541e27efbef3fd237eb68e2d))

# [0.1.0-develop.33](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.32...v0.1.0-develop.33) (2023-07-29)


### Bug Fixes

* make callModule a wrapper function that calls handleError ([73ea9ca](https://git.lumeweb.com/LumeWeb/libkernel/commit/73ea9ca5b08d9ef4a8b2f54ba4174a66e6e3ec2f))

# [0.1.0-develop.32](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.31...v0.1.0-develop.32) (2023-07-29)


### Bug Fixes

* add missing typeof check ([420a28c](https://git.lumeweb.com/LumeWeb/libkernel/commit/420a28c2246a696d1dea136c599f6b69f116a61f))

# [0.1.0-develop.31](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.30...v0.1.0-develop.31) (2023-07-29)


### Bug Fixes

* function does not need to be async ([09b691c](https://git.lumeweb.com/LumeWeb/libkernel/commit/09b691ce0f12ffb4541d7fde392728ed9043e3e0))
* update status signature ([809e0ec](https://git.lumeweb.com/LumeWeb/libkernel/commit/809e0ecd3b7d6fe18a3faa22516c45c916c3b89a))


### Features

* add name method for api ([7affb28](https://git.lumeweb.com/LumeWeb/libkernel/commit/7affb2808133372f2c94a63deff58f3f057f4ce8))

# [0.1.0-develop.30](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.29...v0.1.0-develop.30) (2023-07-27)


### Bug Fixes

* make getNetworkModuleStatus not be async so we don't need to wait to get the async function if we have a callback ([a72651e](https://git.lumeweb.com/LumeWeb/libkernel/commit/a72651e9246d6d0a8a9670f9ada534e5da5116e6))

# [0.1.0-develop.29](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.28...v0.1.0-develop.29) (2023-07-26)

# [0.1.0-develop.28](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.27...v0.1.0-develop.28) (2023-07-25)


### Bug Fixes

* export getNetworkModuleStatus ([624511a](https://git.lumeweb.com/LumeWeb/libkernel/commit/624511a0417531db57c93d64cae74dd7f66996b1))

# [0.1.0-develop.27](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.26...v0.1.0-develop.27) (2023-07-23)


### Bug Fixes

* export NetworkClient ([55b578a](https://git.lumeweb.com/LumeWeb/libkernel/commit/55b578aaceaea0ae92700fccbb7eca5085c6b35c))

# [0.1.0-develop.26](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.25...v0.1.0-develop.26) (2023-07-23)


### Features

* re-export defer from p-defer ([2ac16d2](https://git.lumeweb.com/LumeWeb/libkernel/commit/2ac16d2c5c6f505d4a76d41c5e9e3ad67dacb1cd))

# [0.1.0-develop.25](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.24...v0.1.0-develop.25) (2023-07-23)


### Features

* add getNetworkModuleStatus to fetch a network module status, either one time or continuous ([19167ac](https://git.lumeweb.com/LumeWeb/libkernel/commit/19167acec25fd1e9caa6023e539f10b8c0e0fb02))
* create abstract NetworkClient with register, status, and ready methods. status calls getNetworkModuleStatus ([711b134](https://git.lumeweb.com/LumeWeb/libkernel/commit/711b1341b80da16cc500ca1e6ba856a145f50037))

# [0.1.0-develop.24](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.23...v0.1.0-develop.24) (2023-07-21)


### Bug Fixes

* if we are in a webworker, automatically setup the handler so we don't ever forget ([565fb05](https://git.lumeweb.com/LumeWeb/libkernel/commit/565fb05d85073f254badb9e05ba372568da62c37))

# [0.1.0-develop.23](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.22...v0.1.0-develop.23) (2023-07-21)


### Bug Fixes

* add type check on window ([ceffa29](https://git.lumeweb.com/LumeWeb/libkernel/commit/ceffa292ca7fa12f5a53b6975d988caff5347747))

# [0.1.0-develop.22](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.21...v0.1.0-develop.22) (2023-07-21)

# [0.1.0-develop.21](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.20...v0.1.0-develop.21) (2023-07-20)

# [0.1.0-develop.20](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.19...v0.1.0-develop.20) (2023-07-18)

# [0.1.0-develop.19](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.18...v0.1.0-develop.19) (2023-07-18)

# [0.1.0-develop.18](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.17...v0.1.0-develop.18) (2023-07-18)

# [0.1.0-develop.17](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.16...v0.1.0-develop.17) (2023-07-18)

# [0.1.0-develop.16](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.15...v0.1.0-develop.16) (2023-07-11)


### Bug Fixes

* pass event.data.err to logErr ([191c3b5](https://git.lumeweb.com/LumeWeb/libkernel/commit/191c3b5f903fd057443f2a35db1a32a3e3de90ff))

# [0.1.0-develop.15](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.14...v0.1.0-develop.15) (2023-07-08)

# [0.1.0-develop.14](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.13...v0.1.0-develop.14) (2023-07-03)


### Bug Fixes

* export concatBytes ([c1f3daa](https://git.lumeweb.com/LumeWeb/libkernel/commit/c1f3daae83705ec2c90ffb976d4232be48b60c0c))

# [0.1.0-develop.13](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.12...v0.1.0-develop.13) (2023-07-02)

# [0.1.0-develop.12](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.11...v0.1.0-develop.12) (2023-07-02)


### Bug Fixes

* replace skt.us with kernel.lumeweb.com ([079bfc2](https://git.lumeweb.com/LumeWeb/libkernel/commit/079bfc2b192c267df9802536306fb453575c59d0))

# [0.1.0-develop.11](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.10...v0.1.0-develop.11) (2023-07-02)


### Bug Fixes

* add support for a hosted kernel, but only on localhost (for debugging) ([44e2a0d](https://git.lumeweb.com/LumeWeb/libkernel/commit/44e2a0d06d5c8511a505a6b5348db6cefac10a01))

# [0.1.0-develop.10](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.9...v0.1.0-develop.10) (2023-07-02)


### Bug Fixes

* export bufToHex ([9767232](https://git.lumeweb.com/LumeWeb/libkernel/commit/976723202d4e7af6288fd73b33756ba016d31999))

# [0.1.0-develop.9](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.8...v0.1.0-develop.9) (2023-07-01)

# [0.1.0-develop.8](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.7...v0.1.0-develop.8) (2023-07-01)

# [0.1.0-develop.7](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.6...v0.1.0-develop.7) (2023-07-01)


### Bug Fixes

* export handlePresentKey ([e6a13a1](https://git.lumeweb.com/LumeWeb/libkernel/commit/e6a13a16cce277f3782526ac9aef3160e8f613e4))

# [0.1.0-develop.6](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.5...v0.1.0-develop.6) (2023-06-29)

# [0.1.0-develop.5](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.4...v0.1.0-develop.5) (2023-06-29)


### Bug Fixes

* need typeof ([2d7d057](https://git.lumeweb.com/LumeWeb/libkernel/commit/2d7d057b052c55e9eaf48f38798075a138c1bac1))

# [0.1.0-develop.4](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.3...v0.1.0-develop.4) (2023-06-29)

# [0.1.0-develop.3](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.2...v0.1.0-develop.3) (2023-06-28)


### Bug Fixes

* update package exports to include types ([aae4acd](https://git.lumeweb.com/LumeWeb/libkernel/commit/aae4acd6a70724e242f0c4cfb6e75e95e448a31b))

# [0.1.0-develop.2](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.1.0-develop.1...v0.1.0-develop.2) (2023-06-28)


### Bug Fixes

* add factory back in ([480fdf2](https://git.lumeweb.com/LumeWeb/libkernel/commit/480fdf23e85ad954bc2218138c57e963a10d17dd))

# [0.1.0-develop.1](https://git.lumeweb.com/LumeWeb/libkernel/compare/v0.0.1...v0.1.0-develop.1) (2023-06-28)


### Features

* initial version ([caae937](https://git.lumeweb.com/LumeWeb/libkernel/commit/caae93735270b4ce8a656d624fcd13adab84fd97))
