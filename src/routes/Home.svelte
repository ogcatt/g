<script lang="ts">
    import { noots } from "../data/nootropics-obj";
    let sorted_noots = Object.keys(noots).sort();
    console.log(noots);
  
    let search = "";
    let results = [
  
    ];
  
    const update_results = () => {
      // Wipe previous results
      results = [];
      // Debug
      console.log(search);
      let search_to_lower = search.toLowerCase().trim();
  
      // First search algo (exact spelling)
      for(let i=0; i < Object.keys(noots).length; i++) {
        let noot_to_lower = noots[Object.keys(noots)[i]].name.toLowerCase();
        let noot_no_dash = noot_to_lower.replace(/-/g, '')
        let noot_space_dash = noot_to_lower.replace(/-/g, ' ')
        console.log(noot_no_dash)
  
        if(search_to_lower == noot_to_lower || search_to_lower == noot_no_dash || search_to_lower == noot_space_dash) {
          results.push(Object.keys(noots)[i]);
  
        } else {
          let temp_other_names = [];
          for(let x=0; x < noots[Object.keys(noots)[i]].other_names.length; x++) {
            temp_other_names.push(noots[Object.keys(noots)[i]].other_names[x].toLowerCase())
          }
  
          if (noots[Object.keys(noots)[i]].other_names.length != 0 && temp_other_names.includes(search.toLowerCase())) {
            results.push(Object.keys(noots)[i])
          }
        }
      }
  
      // Second search algo (appended to bottom)
      for(let i=0; i < Object.keys(noots).length; i++) {
        let noot_to_lower = noots[Object.keys(noots)[i]].name.toLowerCase();
  
        if (
          !results.includes(Object.keys(noots)[i]) &&
          //search_to_lower.length > 2 &&
          //(noots[Object.keys(noots)[i]].name.length-search.length) < 3 &&
          (noots[Object.keys(noots)[i]].name.length-search.length) > -3 &&
          (noot_to_lower.startsWith(search_to_lower) || noot_to_lower.endsWith(search_to_lower))
        ) {
          results.push(Object.keys(noots)[i])
        }
      }
  
      // Sort results alphabetically
      // results = results.sort();

      // Debug
      console.log(results)
    };
  
  </script>
  
  <main>
    <div>
      
    </div>
    <h2>Nootinfo</h2>
  
    <p>
      Esoteric much.<!-- Sponsored by <a href="https://neuroregen.org" target="_blank">neuroregen</a>.-->
    </p>
  
  
  
    <div style="width:292.4px;">
      <input type="text" id="search" bind:value={search} on:keyup={() => update_results()} placeholder="Search for nootropics ({Object.keys(noots).length})"/>
      <div class="search-results" style="background-color: #141414;border-radius: 0px 0px 8px 8px;">
      {#if search == "" || results.length == sorted_noots.length}
        {#each sorted_noots as codename}
        <a href="details/{codename}"><div class="f" style="padding-top: 0.6em; padding-bottom: 0.6em;">{noots[codename].name}</div></a>
        {/each}
      {:else}
        {#each results as codename, num}
            <a href="details/{codename}"><div class="f" style="padding-top: 0.6em; padding-bottom: 0.6em;">{noots[codename].name}</div></a>
        {/each}
      {/if}
      </div>
      {#if results.length == 0 && search.length != 0} ... {/if}
    </div>
    
  
  </main>
  
  <style>
  
  </style>