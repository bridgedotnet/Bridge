    Bridge.define("System.Text.RegularExpressions.RegexEngineState", {
        txtIndex: 0, // current index
        capIndex: null, // first index of captured text
        capLength: 0, // current length
        passes: null,
        groups: null, // captured groups

        ctor: function () {
            this.$initialize();

            this.passes = [];
            this.groups = [];
        },

        logCapture: function (length) {
            if (this.capIndex == null) {
                this.capIndex = this.txtIndex;
            }

            this.txtIndex += length;
            this.capLength += length;
        },

        logCaptureGroup: function (group, index, length) {
            this.groups.push({ rawIndex: group.rawIndex, slotId: group.packedSlotId, capIndex: index, capLength: length });
        },

        logCaptureGroupBalancing: function (group, capIndex) {
            var balancingSlotId = group.balancingSlotId;
            var groups = this.groups;
            var index = groups.length - 1;
            var group2;
            var group2Index;

            while (index >= 0) {
                if (groups[index].slotId === balancingSlotId) {
                    group2 = groups[index];
                    group2Index = index;

                    break;
                }
                --index;
            }

            if (group2 != null && group2Index != null) {
                groups.splice(group2Index, 1); // remove group2 from the collection

                // Add balancing group value:
                if (group.constructs.name1 != null) {
                    var balCapIndex = group2.capIndex + group2.capLength;
                    var balCapLength = capIndex - balCapIndex;

                    this.logCaptureGroup(group, balCapIndex, balCapLength);
                }

                return true;
            }

            return false;
        },

        resolveBackref: function (packedSlotId) {
            var groups = this.groups;
            var index = groups.length - 1;

            while (index >= 0) {
                if (groups[index].slotId === packedSlotId) {
                    return groups[index];
                }

                --index;
            }

            return null;
        },

        clone: function () {
            var cloned = new System.Text.RegularExpressions.RegexEngineState();
            cloned.txtIndex = this.txtIndex;
            cloned.capIndex = this.capIndex;
            cloned.capLength = this.capLength;

            // Clone passes:
            var clonedPasses = cloned.passes;
            var thisPasses = this.passes;
            var len = thisPasses.length;
            var clonedItem;
            var i;

            for (i = 0; i < len; i++) {
                clonedItem = thisPasses[i].clone();
                clonedPasses.push(clonedItem);
            }

            // Clone groups:
            var clonedGroups = cloned.groups;
            var thisGroups = this.groups;
            len = thisGroups.length;

            for (i = 0; i < len; i++) {
                clonedItem = thisGroups[i];
                clonedGroups.push(clonedItem);
            }

            return cloned;
        }
    });
