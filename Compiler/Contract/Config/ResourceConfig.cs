using System;
using Newtonsoft.Json;

namespace Bridge.Contract
{
    [JsonConverter(typeof(ResourceConfigConverter))]
    public class ResourceConfig
    {
        public ResourceConfig()
        {
            this.Items = new ResourceConfigItem[] { };
        }

        public ResourceConfigItem[] Items
        {
            get; set;
        }

        public bool HasResources()
        {
            return this.Items != null && this.Items.Length > 0;
        }

        public bool IsPrepared { get; private set; }

        private ResourceConfigItem @default;
        public ResourceConfigItem Default
        {
            get
            {
                if (!IsPrepared)
                {
                    throw new InvalidOperationException("Accessing Default before calling PrepareDefault");
                }

                return @default;
            }
        }

        public void PrepareDefault(ResourceConfigItem @default, ResourceConfigItem[] adjustedItems)
        {
            this.@default = @default;
            this.Items = adjustedItems;
            this.IsPrepared = true;
        }
    }

    public class ResourceConfigItem
    {
        public ResourceConfigItem()
        {
            this.Inject = true;
        }

        public string Header
        {
            get; set;
        }

        public bool? Extract
        {
            get; set;
        }

        public bool? Inject
        {
            get; set;
        }

        public string Name
        {
            get; set;
        }

        public string Output
        {
            get; set;
        }

        public string[] Files
        {
            get; set;
        }

        public string Remark
        {
            get; set;
        }
    }

    public class ResourceConfigConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var resourceConfig = value as ResourceConfig;

            serializer.Serialize(writer, resourceConfig.Items);
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            var resourceConfig = existingValue as ResourceConfig;

            ResourceConfigItem[] items = null;

            var failed = false;

            try
            {
                // Check if the resource setting format used is "resources": true/false
                // This case has low possibility
                // but to have a more meaningful exception details for the second case (below)
                // it is done at first
                var inject = serializer.Deserialize<bool>(reader);

                items = new ResourceConfigItem[]
                {
                    new ResourceConfigItem()
                    {
                        Inject = inject
                    }
                };
            }
            catch (JsonSerializationException)
            {
                failed = true;
            }

            if (failed)
            {
                // Check if the resource setting format used is "resources": [ {} ]
                items = serializer.Deserialize<ResourceConfigItem[]>(reader);
            }

            resourceConfig.Items = items;

            return resourceConfig;

        }

        public override bool CanConvert(Type objectType)
        {
            return objectType == typeof(ResourceConfigItem[]) || objectType == typeof(bool);
        }
    }
}
