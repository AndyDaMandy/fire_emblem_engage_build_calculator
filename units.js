class Unit {
    constructor(base_lvl, base_hp, base_str, base_mag, base_dex, base_spd, base_def, base_res, base_lck, base_bld, base_mov, hp_growth, str_growth, mag_growth, dex_growth, spd_growth, def_growth, res_growth, lck_growth, bld_growth) {
        this.base_lvl = base_lvl;
        this.base_hp = base_hp;
        this.base_str = base_str,
        this.base_mag = base_mag,
        this.base_dex = base_dex,
        this.base_spd = base_spd;
        this.base_def = base_def;
        this.base_res = base_res;
        this.base_lck = base_lck;
        this.base_bld = base_bld;
        this.base_mov = base_mov;
        this.hp_growth = hp_growth;
        this.str_growth = str_growth;
        this.mag_growth = mag_growth;
        this.dex_growth = dex_growth;
        this.spd_growth = spd_growth;
        this.def_growth = def_growth;
        this.res_growth = res_growth;
        this.lck_growth = lck_growth;
        this.bld_growth = bld_growth;

    }
}

const alear = new Unit(
    1,
    22,
    6,
    0,
    5,
    7,
    5,
    3,
    5,
    4,
    4,
    60,
    35,
    20,
    45,
    50,
    40,
    25,
    25,
    5
)