// Created on 2023/03/26 - 00:39
import { publish, refreshCDN } from "@moonvy/deploy"

await publish("web", "./dist", "")
await refreshCDN(["https://ops.jk.cm/apps/ops/"])
