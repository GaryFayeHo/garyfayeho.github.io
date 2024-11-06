pipeline

1. 数据预处理

2. 模型处理
3. 模型后处理 



使用gpu运行

```bash
import os
os.environ['CUDA_VISIBLE_DEVICES'] = '0' # 0 使用是第几个gpu开始运行，从0开始
```



AutoConfig用法

```bash
from transformers import AutoConfig, AutoModelForTokenClassification

# Download model and configuration from huggingface.co and cache.
model = AutoModelForTokenClassification.from_pretrained("google-bert/bert-base-cased")

# Update configuration during loading
model = AutoModelForTokenClassification.from_pretrained("google-bert/bert-base-cased", output_attentions=True)
model.config.output_attentions

# Loading from a TF checkpoint file instead of a PyTorch model (slower)
config = AutoConfig.from_pretrained("./tf_model/bert_tf_model_config.json")
model = AutoModelForTokenClassification.from_pretrained(
    "./tf_model/bert_tf_checkpoint.ckpt.index", from_tf=True, config=config
)
```



查看transformers

```bash
import transformers
print(transformers.__version__)
```
