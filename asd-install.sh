# this script most recently updated/maintained in august 2025
# extract username from current working directory (expects format: username.github.io)
current_dir="Firedragon10980.github.io"

# check if asd-projects folder already exists
if [ -d "asd-projects" ]; then
  echo "Error: asd-projects directory already exists." 
  echo "You may have already run this script. Check with your instructor before proceeding. Cancelling operation."
  exit 1
fi

# clone student-owned asd-projects repo
git clone https://github.com/$username/asd

# remove git references from cloned repo if the asd folder exists
if [ -d "asd" ]; then
  echo "Preparing asd projects and instructions..."
else
  echo "Error: asd folder does not exist." 
  echo "There may be an issue with your repository. Please check with your instructor to help troubleshoot. Cancelling operation."
  exit 1
fi

cd asd
rm -rf .git*
cd ..

# create subfolders in project-instructions folder
if [ ! -d "project-instructions/asd" ]; then
  mv project-instructions fsd
  mkdir project-instructions
  mv fsd project-instructions/
  mv asd/project-instructions project-instructions/asd/
else
  echo "asd subfolder already exists in project-instructions. Existing asd instructions will be replaced."
  mv asd/project-instructions project-instructions/asd/
fi

# move asd projects to root
mv asd/asd-projects asd-projects/

# remove cloned asd repo once all projects are installed
rm -rf asd