#define fdt32_t int

struct dtd_regulator_fixed
{
    fdt32_t gpio[3];
    fdt32_t pinctrl_0;
    const char *pinctrl_names;
    int regulator_boot_on;
    fdt32_t regulator_max_microvolt;
    fdt32_t regulator_min_microvolt;
    const char *regulator_name;
    fdt32_t vin_supply;
};
static struct dtd_regulator_fixed dtv_sdmmc_regulator = {
    .gpio = {0x61, 0x1e, 0x1},
    .pinctrl_0 = 0x67,
    .pinctrl_names = "default",
    .regulator_boot_on = 1,
    .regulator_max_microvolt = 0x325aa0,
    .regulator_min_microvolt = 0x325aa0,
    .regulator_name = "vcc_sd",
    .vin_supply = 0x1c,
};

int main(int argc, char const *argv[])
{
    struct dtd_regulator_fixed dtv_sdmmc_regulator2 = {
        {},
        1,
        "11",
        .regulator_boot_on = 1,
    };
    return 0;
}