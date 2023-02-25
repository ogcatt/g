<script lang="ts">
    import { onMount } from "svelte";
    //import SmilesDrawer from "smiles-drawer";
    export let codename;
    import { noots } from "../data/nootropics-obj";

    const num_to_rating = (num) => {
        let rating = "";

        switch (num) {
        case 10:
            rating = "S+";
            break;
        case 9:
            rating = "S";
            break;
        case 8:
            rating = "A";
            break;
        case 7:
            rating = "B";
            break;
        case 6:
            rating = "C+";
            break;
        case 5:
            rating = "C";
            break;
        case 4:
            rating = "D+";
            break;
        case 3:
            rating = "D";
            break;
        case 2:
            rating = "E";
            break;
        case 1:
            rating = "F"
            break;
        case 0:
            rating = "N"
            break;
        
        }

        return rating;
    }

    let noot = noots[codename];
    onMount(async () => {
        let smilesDrawer = new SmilesDrawer.Drawer({
            width: 350,
            height: 230,
            terminalCarbons: true
        });
        SmilesDrawer.parse(
            noot.smiles,
            function (tree) {
                // Draw to the canvas
                smilesDrawer.draw(tree, "example-canvas", "dark", false);
                // Alternatively, draw to SVG:
                // svgDrawer.draw(tree, 'output-svg', 'dark', false);
            },
            function (err) {
                console.log(err);
            }
        );
    });
</script>

<main>
    <a href="/">Back</a>
    <div class="side-by-side">
        <div>
            <h1 style="margin-bottom:0px;">{noot.name}</h1>
            {#if noot.other_names.length != 0}
            <span><b>AKA</b>: <span style="color:#353535">{#each noot.other_names as name, i}{name}{#if i != noot.other_names.length - 1}, {/if}{/each}</span>
            </span>
            {/if}
            <h2>Rating: {num_to_rating(noot.rating)}</h2>
            <br />
            <span
                ><b>Soluble in</b>: {#if noot.soluble_in.length == 0}
                    Unknown
                {:else}{#each noot.soluble_in as name, i}{name}{#if i != noot.soluble_in.length - 1},{/if}
                    {/each}{/if}</span
            >
            <br>
            <div style="margin-top:7px;"><span style="background-color:black;padding:6px;border-radius:5px;"><b>ROA</b>: {noot.recommended_roa}</span><span style="margin-left:5px;">{#if noot.zinc != ""}<a href="https://zinc15.docking.org/substances/{noot.zinc}" title="Click to visit zinc page for {noot.name}" target="_blank" rel="noreferrer">Zinc</a>{/if}</span></div>
        </div>
        <div>
        <div style="display:flex;justify-content: center;">
            <canvas id="example-canvas" width="350" height="200" />
        </div>
        </div>
    </div>
</main>
