const current_version=`2.0.0/p02`;
const current_ofnfull=`OptiFine HD U J9 for Java Edition 1.21.11`;
const current_ofnvers=`OptiFine HD U J9 for Java Edition 1.21.11`;
const banner=`<img src="assets/web/2.0.0.0-banner.png"class="banner">`;
const header=`${banner}<br><h1>Local Oaf's 8×8 - Version ${current_version}</h1>`;
function list2(functionInput2){
    let temp=[""];
    for(var cur in functionInput2){
        let temp2=typeof(functionInput2[cur])
        if(temp2=="string"){
            temp.push(`• ${functionInput2[cur].toString()}<br>`);
        }else if(temp2=="object"){
            if(functionInput2[cur].length==1){
                temp.push(`&emsp;&emsp;• ${functionInput2[cur][0].toString()}<br>`);
            }else if (functionInput2[cur].length==2){
                temp.push(`${"&emsp;".repeat(functionInput2[cur][1])}• ${functionInput2[cur][0].toString()}<br>`);
            };
        };
    };
    temp.slice(1);
    return temp.join("");
};
//update template
/*
<br><details><summary><h2>UPDATENAME</h2></summary><p>
        DETAILS
        ${list2([])}
    </p></details>
*/
const changelog_content=`
    <details><summary><h2>Beta/Release 1.x (January 12<sup>th</sup>&nbsp;- October 7<sup>th</sup>, 2025)</h2></summary><p>
        <a href="assets/web/pre-2.x-changelog.html">Click me to see the old changelog.</a>
    </p></details><br><details><summary><h2>Pre-release 2.0.0-pre01 (March 7<sup>th</sup>, 2026)</h2></summary><p>
        Complete reorganization of file structure
        ${list2([
        ])}
    </p></details><br><div id="latest"><details><summary><h2>Pre-release 2.0.0/p02 (November 16<sup>th</sup>, 2026)</h2></summary><p>
        Complete reorganization of file structure, bedrock files removed, will be re-released at a later date.<br>
        Only new files added are listed below.
        Added/Modified Files:<br>
        ${list2([
            ["%pack.mcmeta"],
            ["%assets/minecraft/models/block/black_bed_foot.json"],
            ["%assets/minecraft/models/block/black_bed_head.json"],
            ["%assets/minecraft/models/block/blue_bed_foot.json"],
            ["%assets/minecraft/models/block/blue_bed_head.json"],
            ["%assets/minecraft/models/block/brown_bed_foot.json"],
            ["%assets/minecraft/models/block/brown_bed_head.json"],
            ["%assets/minecraft/models/block/cyan_bed_foot.json"],
            ["%assets/minecraft/models/block/cyan_bed_head.json"],
            ["%assets/minecraft/models/block/gray_bed_foot.json"],
            ["%assets/minecraft/models/block/gray_bed_head.json"],
            ["%assets/minecraft/models/block/green_bed_foot.json"],
            ["%assets/minecraft/models/block/green_bed_head.json"],
            ["%assets/minecraft/models/block/light_blue_bed_foot.json"],
            ["%assets/minecraft/models/block/light_blue_bed_head.json"],
            ["%assets/minecraft/models/block/light_gray_bed_foot.json"],
            ["%assets/minecraft/models/block/light_gray_bed_head.json"],
            ["%assets/minecraft/models/block/lime_bed_foot.json"],
            ["%assets/minecraft/models/block/lime_bed_head.json"],
            ["%assets/minecraft/models/block/magenta_bed_foot.json"],
            ["%assets/minecraft/models/block/magenta_bed_head.json"],
            ["%assets/minecraft/models/block/orange_bed_foot.json"],
            ["%assets/minecraft/models/block/orange_bed_head.json"],
            ["%assets/minecraft/models/block/pink_bed_foot.json"],
            ["%assets/minecraft/models/block/pink_bed_head.json"],
            ["%assets/minecraft/models/block/purple_bed_foot.json"],
            ["%assets/minecraft/models/block/purple_bed_head.json"],
            ["%assets/minecraft/models/block/red_bed_foot.json"],
            ["%assets/minecraft/models/block/red_bed_head.json"],
            ["%assets/minecraft/models/block/template_attached_hanging_sign_rot_0.json"],
            ["%assets/minecraft/models/block/template_attached_hanging_sign_rot_1.json"],
            ["%assets/minecraft/models/block/template_attached_hanging_sign_rot_2.json"],
            ["%assets/minecraft/models/block/template_attached_hanging_sign_rot_3.json"],
            ["%assets/minecraft/models/block/template_bed_foot.json"],
            ["%assets/minecraft/models/block/template_bed_head.json"],
            ["%assets/minecraft/models/block/template_hanging_sign_rot_0.json"],
            ["%assets/minecraft/models/block/template_hanging_sign_rot_1.json"],
            ["%assets/minecraft/models/block/template_hanging_sign_rot_2.json"],
            ["%assets/minecraft/models/block/template_hanging_sign_rot_3.json"],
            ["%assets/minecraft/models/block/template_wall_hanging_sign.json"],
            ["%assets/minecraft/models/block/white_bed_foot.json"],
            ["%assets/minecraft/models/block/white_bed_head.json"],
            ["%assets/minecraft/models/block/yellow_bed_foot.json"],
            ["%assets/minecraft/models/block/yellow_bed_head.json"],
            ["%assets/minecraft/models/item/spyglass_in_hand.json"],
            ["%assets/minecraft/textures/block/acacia_hanging_sign.png"],
            ["%assets/minecraft/textures/block/acacia_sign.png"],
            ["%assets/minecraft/textures/block/bamboo_hanging_sign.png"],
            ["%assets/minecraft/textures/block/bamboo_sign.png"],
            ["%assets/minecraft/textures/block/birch_hanging_sign.png"],
            ["%assets/minecraft/textures/block/birch_sign.png"],
            ["%assets/minecraft/textures/block/cherry_hanging_sign.png"],
            ["%assets/minecraft/textures/block/cherry_sign.png"],
            ["%assets/minecraft/textures/block/chiseled_cinnabar.png"],
            ["%assets/minecraft/textures/block/chiseled_sulfur.png"],
            ["%assets/minecraft/textures/block/cinnabar.png"],
            ["%assets/minecraft/textures/block/cinnabar_bricks.png"],
            ["%assets/minecraft/textures/block/crimson_hanging_sign.png"],
            ["%assets/minecraft/textures/block/crimson_sign.png"],
            ["%assets/minecraft/textures/block/dark_oak_hanging_sign.png"],
            ["%assets/minecraft/textures/block/dark_oak_sign.png"],
            ["%assets/minecraft/textures/block/dried_kelp_bottom.png"],
            ["%assets/minecraft/textures/block/dried_kelp_side.png"],
            ["%assets/minecraft/textures/block/dried_kelp_top.png"],
            ["%assets/minecraft/textures/block/enchanting_table_side.png"],
            ["%assets/minecraft/textures/block/fire_0.png"],
            ["%assets/minecraft/textures/block/fire_0.xcf"],
            ["%assets/minecraft/textures/block/fire_1.png"],
            ["%assets/minecraft/textures/block/fire_1.xcf"],
            ["%assets/minecraft/textures/block/golden_dandelion.png"],
            ["%assets/minecraft/textures/block/jungle_hanging_sign.png"],
            ["%assets/minecraft/textures/block/jungle_sign.png"],
            ["%assets/minecraft/textures/block/mangrove_hanging_sign.png"],
            ["%assets/minecraft/textures/block/mangrove_sign.png"],
            ["%assets/minecraft/textures/block/oak_hanging_sign.png"],
            ["%assets/minecraft/textures/block/oak_sign.png"],
            ["%assets/minecraft/textures/block/orange_poplar_leaves.png"],
            ["%assets/minecraft/textures/block/orange_poplar_leaves.png.mcmeta"],
            ["%assets/minecraft/textures/block/pale_oak_hanging_sign.png"],
            ["%assets/minecraft/textures/block/pale_oak_sign.png"],
            ["%assets/minecraft/textures/block/polished_cinnabar.png"],
            ["%assets/minecraft/textures/block/polished_sulfur.png"],
            ["%assets/minecraft/textures/block/poplar_door_bottom.png"],
            ["%assets/minecraft/textures/block/poplar_door_top.png"],
            ["%assets/minecraft/textures/block/poplar_hanging_sign.png"],
            ["%assets/minecraft/textures/block/poplar_log.png"],
            ["%assets/minecraft/textures/block/poplar_log_top.png"],
            ["%assets/minecraft/textures/block/poplar_planks.png"],
            ["%assets/minecraft/textures/block/poplar_sapling.png"],
            ["%assets/minecraft/textures/block/poplar_shelf.png"],
            ["%assets/minecraft/textures/block/poplar_sign.png"],
            ["%assets/minecraft/textures/block/poplar_trapdoor.png"],
            ["%assets/minecraft/textures/block/potent_sulfur.png"],
            ["%assets/minecraft/textures/block/red_poplar_leaves.png"],
            ["%assets/minecraft/textures/block/red_poplar_leaves.png.mcmeta"],
            ["%assets/minecraft/textures/block/red_shrub.png"],
            ["%assets/minecraft/textures/block/spruce_hanging_sign.png"],
            ["%assets/minecraft/textures/block/spruce_sign.png"],
            ["%assets/minecraft/textures/block/straw_bed_particle.png"],
            ["%assets/minecraft/textures/block/stripped_poplar_log.png"],
            ["%assets/minecraft/textures/block/stripped_poplar_log_top.png"],
            ["%assets/minecraft/textures/block/sulfur.png"],
            ["%assets/minecraft/textures/block/sulfur_bricks.png"],
            ["%assets/minecraft/textures/block/sulfur_spike_down_base.png"],
            ["%assets/minecraft/textures/block/sulfur_spike_down_frustum.png"],
            ["%assets/minecraft/textures/block/sulfur_spike_down_middle.png"],
            ["%assets/minecraft/textures/block/sulfur_spike_down_tip.png"],
            ["%assets/minecraft/textures/block/sulfur_spike_down_tip_merge.png"],
            ["%assets/minecraft/textures/block/sulfur_spike_up_base.png"],
            ["%assets/minecraft/textures/block/sulfur_spike_up_frustum.png"],
            ["%assets/minecraft/textures/block/sulfur_spike_up_middle.png"],
            ["%assets/minecraft/textures/block/sulfur_spike_up_tip.png"],
            ["%assets/minecraft/textures/block/sulfur_spike_up_tip_merge.png"],
            ["%assets/minecraft/textures/block/warped_hanging_sign.png"],
            ["%assets/minecraft/textures/block/warped_sign.png"],
            ["%assets/minecraft/textures/block/yellow_poplar_leaves.png"],
            ["%assets/minecraft/textures/block/yellow_poplar_leaves.png.mcmeta"],
            ["%assets/minecraft/textures/block/bed/black.png"],
            ["%assets/minecraft/textures/block/bed/blue.png"],
            ["%assets/minecraft/textures/block/bed/brown.png"],
            ["%assets/minecraft/textures/block/bed/common.png"],
            ["%assets/minecraft/textures/block/bed/cyan.png"],
            ["%assets/minecraft/textures/block/bed/gray.png"],
            ["%assets/minecraft/textures/block/bed/green.png"],
            ["%assets/minecraft/textures/block/bed/lblue.png"],
            ["%assets/minecraft/textures/block/bed/lgray.png"],
            ["%assets/minecraft/textures/block/bed/lime.png"],
            ["%assets/minecraft/textures/block/bed/magenta.png"],
            ["%assets/minecraft/textures/block/bed/orange.png"],
            ["%assets/minecraft/textures/block/bed/pink.png"],
            ["%assets/minecraft/textures/block/bed/purple.png"],
            ["%assets/minecraft/textures/block/bed/red.png"],
            ["%assets/minecraft/textures/block/bed/straw.png"],
            ["%assets/minecraft/textures/block/bed/white.png"],
            ["%assets/minecraft/textures/block/bed/yellow.png"],
            ["%assets/minecraft/textures/entity/bat/bat.png"],
            ["%assets/minecraft/textures/entity/beacon/beacon_beam.png"],
            ["%assets/minecraft/textures/entity/blaze/blaze.png"],
            ["%assets/minecraft/textures/entity/cushion/black_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/blue_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/brown_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/cyan_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/gray_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/green_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/light_blue_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/light_gray_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/lime_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/magenta_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/orange_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/pink_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/purple_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/red_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/white_cushion.png"],
            ["%assets/minecraft/textures/entity/cushion/yellow_cushion.png"],
            ["%assets/minecraft/textures/entity/enchantment/enchanting_table_book.png"],
            ["%assets/minecraft/textures/entity/end_portal/end_gateway_beam.png"],
            ["%assets/minecraft/textures/entity/end_portal/end_portal.png"],
            ["%assets/minecraft/textures/entity/endermite/endermite.png"],
            ["%assets/minecraft/textures/entity/experience/experience_orb.png"],
            ["%assets/minecraft/textures/entity/fishing/fishing_hook.png"],
            ["%assets/minecraft/textures/entity/guardian/guardian.png"],
            ["%assets/minecraft/textures/entity/guardian/guardian_beam.png"],
            ["%assets/minecraft/textures/entity/guardian/guardian_elder.png"],
            ["%assets/minecraft/textures/entity/lead_knot/lead_knot.png"],
            ["%assets/minecraft/textures/entity/minecart/minecart.png"],
            ["%assets/minecraft/textures/entity/shield/base.png"],
            ["%assets/minecraft/textures/entity/shield/border.png"],
            ["%assets/minecraft/textures/entity/shield/birks.png"],
            ["%assets/minecraft/textures/entity/shield/circle.png"],
            ["%assets/minecraft/textures/entity/shield/creeper.png"],
            ["%assets/minecraft/textures/entity/shield/cross.png"],
            ["%assets/minecraft/textures/entity/shield/curly_border.png"],
            ["%assets/minecraft/textures/entity/shield/diagonal_left.png"],
            ["%assets/minecraft/textures/entity/shield/diagonal_right.png"],
            ["%assets/minecraft/textures/entity/shield/diagonal_up_left.png"],
            ["%assets/minecraft/textures/entity/shield/diagonal_up_right.png"],
            ["%assets/minecraft/textures/entity/shield/flow.png"],
            ["%assets/minecraft/textures/entity/shield/flower.png"],
            ["%assets/minecraft/textures/entity/shield/globe.png"],
            ["%assets/minecraft/textures/entity/shield/gradient.png"],
            ["%assets/minecraft/textures/entity/shield/gradient_up.png"],
            ["%assets/minecraft/textures/entity/shield/guster.png"],
            ["%assets/minecraft/textures/entity/shield/half_horizontal.png"],
            ["%assets/minecraft/textures/entity/shield/half_horizontal_bottom.png"],
            ["%assets/minecraft/textures/entity/shield/half_vertical.png"],
            ["%assets/minecraft/textures/entity/shield/half_vertical_right.png"],
            ["%assets/minecraft/textures/entity/shield/mojang.png"],
            ["%assets/minecraft/textures/entity/shield/note.notes"],
            ["%assets/minecraft/textures/entity/shield/piglin.png"],
            ["%assets/minecraft/textures/entity/shield/rhombus.png"],
            ["%assets/minecraft/textures/entity/shield/shield_base.png"],
            ["%assets/minecraft/textures/entity/shield/shield_base_nopattern.png"],
            ["%assets/minecraft/textures/entity/shield/skull.png"],
            ["%assets/minecraft/textures/entity/shield/small_stripes.png"],
            ["%assets/minecraft/textures/entity/shield/square_bottom_left.png"],
            ["%assets/minecraft/textures/entity/shield/square_bottom_right.png"],
            ["%assets/minecraft/textures/entity/shield/square_top_left.png"],
            ["%assets/minecraft/textures/entity/shield/square_top_right.png"],
            ["%assets/minecraft/textures/entity/shield/straight_cross.png"],
            ["%assets/minecraft/textures/entity/shield/stripe_bottom.png"],
            ["%assets/minecraft/textures/entity/shield/stripe_center.png"],
            ["%assets/minecraft/textures/entity/shield/stripe_downleft.png"],
            ["%assets/minecraft/textures/entity/shield/stripe_downright.png"],
            ["%assets/minecraft/textures/entity/shield/stripe_left.png"],
            ["%assets/minecraft/textures/entity/shield/stripe_middle.png"],
            ["%assets/minecraft/textures/entity/shield/stripe_right.png"],
            ["%assets/minecraft/textures/entity/shield/stripe_top.png"],
            ["%assets/minecraft/textures/entity/shield/triangle_bottom.png"],
            ["%assets/minecraft/textures/entity/shield/triangle_top.png"],
            ["%assets/minecraft/textures/entity/shield/triangles_bottom.png"],
            ["%assets/minecraft/textures/entity/shield/triangles_top.png"],
            ["%assets/minecraft/textures/entity/silverfish/silverfish.png"],
            ["%assets/minecraft/textures/entity/snow_golem/snow_golem.png"],
            ["%assets/minecraft/textures/entity/sulfur_cube/sulfur_cube_inner.png"],
            ["%assets/minecraft/textures/entity/sulfur_cube/sulfur_cube_inner_small.png"],
            ["%assets/minecraft/textures/entity/sulfur_cube/sulfur_cube_outer.png"],
            ["%assets/minecraft/textures/entity/sulfur_cube/sulfur_cube_outer_small.png"],
            ["%assets/minecraft/textures/entity/trident/trident.png"],
            ["%assets/minecraft/textures/entity/trident/trident_riptide.png"],
            ["%assets/minecraft/textures/entity/wandering_trader/wandering_trader.png"],
            ["%assets/minecraft/textures/entity/witch/witch.png"],
            ["%assets/minecraft/textures/item/abandoned_camp_map.png"],
            ["%assets/minecraft/textures/item/black_cushion.png"],
            ["%assets/minecraft/textures/item/blue_cushion.png"],
            ["%assets/minecraft/textures/item/brown_cushion.png"],
            ["%assets/minecraft/textures/item/buried_ancient_city_map.png"],
            ["%assets/minecraft/textures/item/buried_mineshaft_map.png"],
            ["%assets/minecraft/textures/item/buried_treasure_map.png"],
            ["%assets/minecraft/textures/item/buried_trial_chambers_map.png"],
            ["%assets/minecraft/textures/item/cyan_cushion.png"],
            ["%assets/minecraft/textures/item/desert_pyramid_map.png"],
            ["%assets/minecraft/textures/item/desert_village_map.png"],
            ["%assets/minecraft/textures/item/elytra_broken.png"],
            ["%assets/minecraft/textures/item/gray_cushion.png"],
            ["%assets/minecraft/textures/item/green_cushion.png"],
            ["%assets/minecraft/textures/item/jungle_pyramid_map.png"],
            ["%assets/minecraft/textures/item/leather_chestplate_overlay.png"],
            ["%assets/minecraft/textures/item/leather_horse_armor_overlay.png"],
            ["%assets/minecraft/textures/item/light_blue_cushion.png"],
            ["%assets/minecraft/textures/item/light_gray_cushion.png"],
            ["%assets/minecraft/textures/item/lime_cushion.png"],
            ["%assets/minecraft/textures/item/magenta_cushion.png"],
            ["%assets/minecraft/textures/item/map.png"],
            ["%assets/minecraft/textures/item/music_disc_bounce.png"],
            ["%assets/minecraft/textures/item/music_disc_tears.png"],
            ["%assets/minecraft/textures/item/ocean_monument_map.png"],
            ["%assets/minecraft/textures/item/orange_cushion.png"],
            ["%assets/minecraft/textures/item/pink_cushion.png"],
            ["%assets/minecraft/textures/item/plains_village_map.png"],
            ["%assets/minecraft/textures/item/poplar_boat.png"],
            ["%assets/minecraft/textures/item/poplar_chest_boat.png"],
            ["%assets/minecraft/textures/item/poplar_door.png"],
            ["%assets/minecraft/textures/item/poplar_hanging_sign.png"],
            ["%assets/minecraft/textures/item/poplar_sign.png"],
            ["%assets/minecraft/textures/item/purple_cushion.png"],
            ["%assets/minecraft/textures/item/red_cushion.png"],
            ["%assets/minecraft/textures/item/savanna_village_map.png"],
            ["%assets/minecraft/textures/item/snowy_village_map.png"],
            ["%assets/minecraft/textures/item/spyglass_model.png"],
            ["%assets/minecraft/textures/item/sulfur_cube_bucket.png"],
            ["%assets/minecraft/textures/item/sulfur_cube_spawn_egg.png"],
            ["%assets/minecraft/textures/item/sulfur_spike.png"],
            ["%assets/minecraft/textures/item/swamp_hut_map.png"],
            ["%assets/minecraft/textures/item/taiga_village_map.png"],
            ["%assets/minecraft/textures/item/warm_ocean_ruins_map.png"],
            ["%assets/minecraft/textures/item/white_cushion.png"],
            ["%assets/minecraft/textures/item/woodland_mansion_map.png"],
            ["%assets/minecraft/textures/item/yellow_cushion.png"],
            ["%assets/minecraft/textures/particle/bubble_white.png"],
            ["%assets/minecraft/textures/particle/firefly.png"],
            ["%assets/minecraft/textures/particle/geyser_base_01.png"],
            ["%assets/minecraft/textures/particle/geyser_base_02.png"],
            ["%assets/minecraft/textures/particle/geyser_base_03.png"],
            ["%assets/minecraft/textures/particle/geyser_base_04.png"],
            ["%assets/minecraft/textures/particle/geyser_base_05.png"],
            ["%assets/minecraft/textures/particle/geyser_base_06.png"],
            ["%assets/minecraft/textures/particle/geyser_base_07.png"],
            ["%assets/minecraft/textures/particle/geyser_base_08.png"],
            ["%assets/minecraft/textures/particle/geyser_plume_01.png"],
            ["%assets/minecraft/textures/particle/geyser_plume_02.png"],
            ["%assets/minecraft/textures/particle/geyser_plume_03.png"],
            ["%assets/minecraft/textures/particle/geyser_plume_04.png"],
            ["%assets/minecraft/textures/particle/geyser_plume_05.png"],
            ["%assets/minecraft/textures/particle/geyser_plume_06.png"],
            ["%assets/minecraft/textures/particle/geyser_plume_07.png"],
            ["%assets/minecraft/textures/particle/geyser_plume_08.png"],
            ["%assets/minecraft/textures/particle/geyser_poof_01.png"],
            ["%assets/minecraft/textures/particle/geyser_poof_02.png"],
            ["%assets/minecraft/textures/particle/geyser_poof_03.png"],
            ["%assets/minecraft/textures/particle/geyser_poof_04.png"],
            ["%assets/minecraft/textures/particle/geyser_poof_05.png"],
            ["%assets/minecraft/textures/particle/geyser_poof_06.png"],
            ["%assets/minecraft/textures/particle/geyser_poof_07.png"],
            ["%assets/minecraft/textures/particle/geyser_poof_08.png"],
            ["%assets/minecraft/textures/particle/leaf_0.png"],
            ["%assets/minecraft/textures/particle/leaf_1.png"],
            ["%assets/minecraft/textures/particle/leaf_2.png"],
            ["%assets/minecraft/textures/particle/leaf_3.png"],
            ["%assets/minecraft/textures/particle/leaf_4.png"],
            ["%assets/minecraft/textures/particle/leaf_5.png"],
            ["%assets/minecraft/textures/particle/leaf_6.png"],
            ["%assets/minecraft/textures/particle/leaf_7.png"],
            ["%assets/minecraft/textures/particle/leaf_8.png"],
            ["%assets/minecraft/textures/particle/leaf_9.png"],
            ["%assets/minecraft/textures/particle/leaf_10.png"],
            ["%assets/minecraft/textures/particle/leaf_11.png"],
            ["%assets/minecraft/textures/particle/noxious_gas_01.png"],
            ["%assets/minecraft/textures/particle/noxious_gas_02.png"],
            ["%assets/minecraft/textures/particle/noxious_gas_03.png"],
            ["%assets/minecraft/textures/particle/noxious_gas_04.png"],
            ["%assets/minecraft/textures/particle/noxious_gas_05.png"],
            ["%assets/minecraft/textures/particle/noxious_gas_06.png"],
            ["%assets/minecraft/textures/particle/noxious_gas_07.png"],
            ["%assets/minecraft/textures/particle/noxious_gas_08.png"],
            ["%assets/minecraft/textures/particle/orange_poplar_1.png"],
            ["%assets/minecraft/textures/particle/orange_poplar_2.png"],
            ["%assets/minecraft/textures/particle/orange_poplar_3.png"],
            ["%assets/minecraft/textures/particle/orange_poplar_4.png"],
            ["%assets/minecraft/textures/particle/pale_oak_0.png"],
            ["%assets/minecraft/textures/particle/pale_oak_1.png"],
            ["%assets/minecraft/textures/particle/pale_oak_2.png"],
            ["%assets/minecraft/textures/particle/pale_oak_3.png"],
            ["%assets/minecraft/textures/particle/pale_oak_4.png"],
            ["%assets/minecraft/textures/particle/pale_oak_5.png"],
            ["%assets/minecraft/textures/particle/pale_oak_6.png"],
            ["%assets/minecraft/textures/particle/pale_oak_7.png"],
            ["%assets/minecraft/textures/particle/pale_oak_8.png"],
            ["%assets/minecraft/textures/particle/pale_oak_9.png"],
            ["%assets/minecraft/textures/particle/pale_oak_10.png"],
            ["%assets/minecraft/textures/particle/pale_oak_11.png"],
            ["%assets/minecraft/textures/particle/red_poplar_1.png"],
            ["%assets/minecraft/textures/particle/red_poplar_2.png"],
            ["%assets/minecraft/textures/particle/red_poplar_3.png"],
            ["%assets/minecraft/textures/particle/red_poplar_4.png"],
            ["%assets/minecraft/textures/particle/sulfur_cube_goo.png"],
            ["%assets/minecraft/textures/particle/yellow_poplar_1.png"],
            ["%assets/minecraft/textures/particle/yellow_poplar_2.png"],
            ["%assets/minecraft/textures/particle/yellow_poplar_3.png"],
            ["%assets/minecraft/textures/particle/yellow_poplar_4.png"],
            [""]
        ])}
    </p></details></div>
`;
const guide_content=`
    <p>
        Please use OptiFine and have its settings set as follows:<br><br>
        ${list2([["Video Settings > Quality > Custom Entity Models : ON"],["Video Settings > Quality > Custom Item Models : ON"]])}<br>
        The latest version of OptiFine can be downloaded <a href="https://optifine.net/downloads">here</a>.<br>
        The 2.x+ changelog can be viewed <a href="_changelog.html#latest">here</a>.<br>
        The credits can be viewed <a href="_credits.html#home">here</a>.<br><br>
        This version is developed on ${current_ofnvers}, the last full release is ${current_ofnfull}<br><br><br>
        <span class="smallText">
            This resource pack and its creator are in no way affiliated with 
            <a href="https://optifine.net/home/"class="greyLink">OptiFine</a>, 
            <a href="https://www.microsoft.com/en-us/"class="greyLink">Microsoft®</a>, 
            <a href="https://www.minecraft.net/en-us/article/meet-mojang-studios/"class="greyLink">Mojang Studios™</a>, 
            <a href="https://www.minecraft.net/en-us/"class="greyLink">Minecraft®</a>, 
            <a href="https://www.curseforge.com/"class="greyLink">CurseForge®</a>, 
            or any employees/contractors of these organizations.
        </span>
    </p>
`;
const credits_content=`
    <p>
        Software Used:<br>
        ${list2([
            ["<a href=\"https://www.minecraft.net/en-us/store/minecraft-deluxe-collection-pc?tabs=%7B%22MC_Tabs_0%22%3A0%7D\">Minecraft Java Edition</a>"],
            ["<a href=\"https://optifine.net/home\">OptiFine</a>"],
            ["<a href=\"https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com\">Mozilla Firefox</a>"],
            ["<a href=\"https://www.microsoft.com/en-us/edge/?form=MA13FJ\">MS Edge</a>"],
            ["<a href=\"https://microsoft-paint-3d.en.softonic.com/?ex=RAMP-2639.1\">MS Paint 3D</a>"],
            ["<a href=\"https://mh-nexus.de/en/hxd/\">HxD</a>"],
            ["<a href=\"https://code.visualstudio.com/\">Visual Studio Code (VSC)</a>"],
            ["<a href=\"https://chatgpt.com/\">ChatGPT</a>"],
            ["<a href=\"https://www.blender.org/\">Blender</a>"],
            ["<a href=\"https://www.blockbench.net/\">Blockbench</a>"]
        ])}
        <br>
        <br>
        <br>
        <br>
        Mozilla Firefox / MS Edge:<br>
        &emsp;&emsp;• HTML viewing<br>
        <br>
        MS Paint 3D <a href="https://thedoggybrad.github.io/Paint3DArchive/#:~:text=2024%2E2410%2E13017%2E0,mRjH5WiMJcma5I1Yf3uhwls7mynI9Bv8IfUm755%5FgEs">version (6/2024).2410.13017.0</a>:<br>
        &emsp;&emsp;• Texturing<br>
        <br>
        HxD:<br>
        &emsp;&emsp;• .bin file editing<br>
        <br>
        Visual Studio Code (VSC):<br>
        &emsp;&emsp;• Text file editing<br>
        <br>
        Blender:<br>
        &emsp;&emsp;• Block modelling (degisn only)<br>
        <br>
        Blockbench:<br>
        &emsp;&emsp;• Certain block / item models<br>
        &emsp;&emsp;• Entity models
    </p>
`;
//ChatGPT:<br>
//&emsp;&emsp;• Design for the &quot;&amp;&quot; character in the ASCII table<br>
//<br>
window.onload=function(){
    try{document.getElementById("changelog_content").innerHTML=`${header}${changelog_content}`;}catch{console.log("no element named changelog_content found, skipping...");};
    try{document.getElementById("guide_content").innerHTML=`${header}${guide_content}`;}catch{console.log("no element named guide_content found, skipping...");};
    try{document.getElementById("credits_content").innerHTML=`${header}${credits_content}`;}catch{console.log("no element named credits_content found, skipping...");};
};