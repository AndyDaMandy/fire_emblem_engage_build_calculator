class Class {
    constructor(hp_growth, str_growth, mag_growth, dex_growth, spd_growth, def_growth, res_growth, lck_growth, bld_growth){
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

const dragon_child = new Class(
    10,
    10,
    0,
    10,
    15,
    10,
    10,
    5,
    5
)