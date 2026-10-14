const {spawnSync} = require("child_process");
const path = require("path");

const appDir = path.resolve(__dirname, "..");
const kernelPath = path.join(appDir, "kernel", process.platform === "win32" ? "SiYuan-Kernel.exe" : "SiYuan-Kernel");
const result = spawnSync(kernelPath, [
    "serve", "--mode=dev", "--port=6806", "--wd", appDir, ...process.argv.slice(2),
], {
    cwd: appDir,
    stdio: "inherit",
});

if (result.error) {
    console.error(result.error);
}
process.exit(result.status ?? 1);
