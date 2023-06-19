# Objective

## Get Sanity project working with production and staging environments on Vercel:

- So it turns out this is pretty easy with this Sanity/Remix template because of how the dataset is being reference in _~/app/sanity/projectDetails.ts_, and it does not require setting up multiple workspaces.
- All that needs to be done is to go sanity.io/manage and create a new dataset ("staging"). There should already be a production dataset. So now we have two datasets ("staging" and "production").
- Then create two separate environment variables with the same name on Vercel (SANITY_DATASET), setting one to "production" and the other to "staging", making sure that the env var for "production" is for the "production" environment only and the one for "staging" is for the "preview" environment only.
- Now all that's left to do is to create a new branch ("staging"), commit a change to the schema or anything else for that matter, and then push the changes. This will trigger a preview deployment on Vercel using the new branch as well as the preview env var (SANITY_DATASET), which is set to "staging".
- Actually, there's one more thing. In order to access the studio at the new preview URL, we'll need to add the preview URL to Sanity under the CORS tab.
  - In the real world, we will have our own domain for production and subdomain for staging. Fortunately, Vercel gives us this for free, so we don't have to keep adding new URLs to our CORS settings in Sanity everytime we push a change to the staging branch. They're called Branch URLs, which mirror the latest deployment URL.
    - I guess if we ever needed to go back in time to an older version of the studio, we would need to add that deployment URL to our CORS settings in Sanity, but that **_should_** be a rare occurance.

## Use GitHub Actions as a CI/CD pipeline to cleanup the staging dataset and perform production backups.

    - Work-in-progress
