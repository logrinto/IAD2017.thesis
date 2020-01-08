
set -e

git checkout staging

# merge
git merge remotes/origin/master --no-edit

git submodule update --remote --merge


git merge remotes/origin/Nicole --no-edit
git merge remotes/origin/nils --no-edit
git merge remotes/origin/pascale --no-edit
git merge remotes/origin/lars --no-edit
git merge remotes/origin/severin --no-edit
git merge remotes/origin/steffi --no-edit
git merge remotes/origin/matthias --no-edit
git merge remotes/origin/natasha --no-edit

# git merge remotes/origin/Marc --no-edit
# git merge remotes/origin/marius --no-edit
# git merge remotes/origin/tieukhe --no-edit
# git merge remotes/origin/wolfgang --no-edit
